import md5 from "md5"

const URL = process.env.REACT_APP_API_URL;
const SECRET_KEY = process.env.REACT_APP_API_SECRET_KEY
const MAX_RETRIES = 10;

const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");

const authString = `${SECRET_KEY}_${timestamp}`;
const authHeader = md5(authString);

export async function sendRequest(data, retries = 0) {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth': authHeader
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            console.log(response);
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        if (retries < MAX_RETRIES) {
            console.log(`Retrying (${retries + 1}/${MAX_RETRIES})...`);
            return sendRequest(data, retries + 1);
        }
    }
}

export async function getItems(offset, limit) {
    const requestData = {
        action: "get_ids",
        params: {
            offset: offset,
            limit: limit
        }
    };
    const response = await sendRequest(requestData); 

    const uniqueArr = new Set(response.result)
    return [...uniqueArr]
}

export async function getItemsCount() {
    const requestData = {
        action: "get_ids",
        params: {
        }
    };
    const response = await sendRequest(requestData); 
    const uniqueArr = new Set(response.result)
    return [...uniqueArr].length
}


export async function getItemInfo(itemId) {
    const requestData = {
        action: "get_items",
        params: {
            ids: itemId
        }
    };
    const response = await sendRequest(requestData);

    const uniqueArr  = response.result.filter((item, index, self) =>
        index === self.findIndex((t) => (
            t.id === item.id
        ))
    );
    return uniqueArr
}


export async function getItemField(itemId) {
    const requestData = {
        action: "get_fields",
        params: {
            field: 'brand'

        }
    };
    const response = await sendRequest(requestData);
    const uniqueArr = new Set(response.result)
    return [...uniqueArr].filter(item => item)
}

export async function search(field, value) {
    
    const requestData = {
        action: "filter",
        params: {
            [field]: value,
        }
    };
    const response = await sendRequest(requestData);
    return response.result
}