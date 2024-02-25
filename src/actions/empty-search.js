

import { getItemsCount, getItems, getItemInfo } from '../actions/getData';

const handleEmptySearch = async (setLoading, setPagination, setItemToRender, limit) => {
    setLoading(true);
    try {
        const pageCount = await getItemsCount();
        setPagination(pageCount);
        const id = await getItems(0, limit);  
        const items = await getItemInfo(id);
        setItemToRender(items);
    } catch (error) {
        console.error('Error during empty search:', error);
    } finally {
        setLoading(false);
    }
};

export default handleEmptySearch;