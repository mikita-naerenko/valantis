import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import MyContext from '../../context/index'
import useDebounce from '../../hooks/use-debounce';
import { search, getItemInfo } from '../../actions/getData'
import handleEmptySearch from '../../actions/empty-search';

export default function Product() {
    const {limit, setLoading, setPagination, setItemToRender } = useContext(MyContext);

    const debouncedSearch = useDebounce(async (event) => {
        setLoading(true);
        const searchIds = await search('product', event.target.value);
        setLoading(false)
        const items = await getItemInfo(searchIds);
        items && setLoading(false)
        setPagination(items.length)
        setItemToRender(items)

      }, 2000);


    const handleChangeProduct = async (event) => {
        if (event.target.value) {
            try {
                debouncedSearch(event);
            } catch (error) {
                console.error('Error during debounced search:', error);
            }
        } else {
          handleEmptySearch(setLoading, setPagination, setItemToRender, limit);
        }
    };
  return (
    <TextField onChange={handleChangeProduct} id="outlined-basic" label="Название" variant="outlined" />
  )
}
