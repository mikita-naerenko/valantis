import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import MyContext from '../context/index'

export default function BasicPagination() {
    const { setOffset, pagination} = useContext(MyContext);

    const handlePageChange = (_, page) => {
        const calcOffset = (page) => (Number(page) - 1) * 50;
        setOffset(calcOffset(page))
    }
  return (
    <Box sx={{display: 'flex', justifyContent: "center", my: 3}}>
      <Stack spacing={2}>
        <Pagination count={Math.ceil(pagination / 50)} onChange={handlePageChange}  />
      </Stack>
    </Box>
  );
}