import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import MyContext from '../context/index'



const skeletonArr = Array.from({ length: 50 }, (_, index) => (
    <Skeleton key={index} />
  ));

export default function BasicTable() {
  const { loading, itemToRender } = useContext(MyContext);
  return (
    <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center'}}>
      <Table sx={{ minWidth: 650, maxWidth: 950 }} aria-label="simple table" size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Наименование товара</TableCell>
            <TableCell align="center">Бренд</TableCell>
            <TableCell align="center">Цена</TableCell>
            <TableCell align="center">ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? skeletonArr.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right">{row}</TableCell>
              <TableCell align="right">{row}</TableCell>
              <TableCell align="right">{row}</TableCell>

            </TableRow>
          )) : itemToRender.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="right">{row.brand ? row.brand : 'Не указан'}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.id}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}