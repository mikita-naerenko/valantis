import { useEffect, useContext } from 'react'
import { getItems, getItemInfo, getItemsCount, getItemField } from "../actions/getData"
import BasicTable from '../components/basic-table'
import BasicPagination from '../components/basic-pagination';
import MyContext from '../context/index'
import FilterBar from '../components/filter-bar';
import NoData from '../components/no-data';


export default function Main() {
  const {
    offset,
    limit,
    itemToRender,
    setLoading,
    setPagination,
    setItemToRender,
    setSelectOptions
} = useContext(MyContext);

    useEffect(() => {
        const getData = async () => {
          try {
            setLoading(true)
            const pageCount = await getItemsCount();
            const field = await getItemField();
            setSelectOptions(["все", ...field])
            setPagination(pageCount)
            const id = await getItems(offset, limit);  
            const items = await getItemInfo(id);
            setItemToRender(items)
            setLoading(false)
          } catch (e) {
            console.log(e);
          }         
        }
        getData();
      }, [offset, limit]); 

  return (
    <main>
      <FilterBar/>
      <BasicTable/>
      {itemToRender.length === 0 && <NoData/>}
      <BasicPagination/>
    </main>
  )
}
