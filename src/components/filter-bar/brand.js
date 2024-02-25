import React, { useContext } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { search, getItemInfo } from '../../actions/getData'
import MyContext from '../../context/index'
import handleEmptySearch from '../../actions/empty-search';

export default function Brand() {
    const { limit, setLoading, setPagination, setItemToRender, selectOptions } = useContext(MyContext);
    const handleChangeBrand = async (event) => {
        if (event.target.textContent === "все" || !event.target.textContent) {
          handleEmptySearch(setLoading, setPagination, setItemToRender, limit);
        }
        else {
          try {
            setLoading(true);
            const id = await search('brand', event.target.textContent);
            const items = await getItemInfo(id);
            setPagination(items.length)
            setItemToRender(items)
            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        }
      }
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={selectOptions ? selectOptions : ["загрузка"]}
      sx={{ width: 300 }}
      onInputChange={handleChangeBrand}
      onChange={handleChangeBrand}
      renderInput={(params) => <TextField {...params} label="Бренд" />}
    />
  )
}
