import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';


const skeletonArr = Array.from({ length: 50 }, (_, index) => (
    <Skeleton key={index} variant="text" sx={{ fontSize: '1rem' }}/>
  ));





export default function BasicTable({rows}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Наименование товара</TableCell>
            <TableCell align="right">Бренд</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="center">ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skeletonArr.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right">{row}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.id}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}