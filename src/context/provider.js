import React, { useState } from 'react';
import MyContext from './index';

const MyProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(50);
  const [itemToRender, setItemToRender] = useState([]);
  const [pagination, setPagination] = useState(0)
  const [loading, setLoading] = useState(false);
  const [selectOptions, setSelectOptions] = useState(null);

  return (
    <MyContext.Provider value={{ loading, setLoading, limit, setLimit, offset, setOffset, itemToRender, setItemToRender, pagination, setPagination, selectOptions, setSelectOptions}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;