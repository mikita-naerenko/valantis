import React from 'react'
import { Box } from '@mui/system'
import Brand from './brand'
import Product from './product'
import Price from './price'

export default function FilterBar() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', my: 5}}>
      <Box sx={{mr: 2}}>
        <Brand/>
      </Box>
      <Box sx={{mr: 2}}>
        <Product/>
      </Box>
      <Box sx={{mr: 2}}>
        <Price/>
      </Box>
      
      
      
    </Box>
  )
}
