import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import MyContext from '../../context/index'
import useDebounce from '../../hooks/use-debounce';
import { search, getItemInfo, } from '../../actions/getData'
import handleEmptySearch from '../../actions/empty-search';

export default function Price() {
    const {limit, setLoading, setPagination, setItemToRender } = useContext(MyContext);

    
    const debouncedSearch = useDebounce(async (event) => {
        setLoading(true);
        const searchIds = await search('price', +event.target.value);
        const items = await getItemInfo(searchIds);
        items && setLoading(false)
        setPagination(items.length)
        setItemToRender(items)

      }, 2000);


    const handleChangePrice = async (event) => {
        if (event.target.value) {
          try {
            debouncedSearch(event);
          } catch (error) {
            console.error(error);
          }
        }
        else {
          handleEmptySearch(setLoading, setPagination, setItemToRender, limit);
        }
      }
  return (
    <TextField type="number" onChange={handleChangePrice} id="outlined-basic" label="Цена" variant="outlined" />
  )
}
