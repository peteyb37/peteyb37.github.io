import { Box, Typography  } from '@mui/material';
import React from 'react';

import Header from './header';
function Merch() {

  

  return (
    <Box sx={{borderTop: '3px solid #912F40', display: 'flex', flexDirection: 'column', height: '80vh', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
      
      <Typography>Merch</Typography>
    </Box>
  )
}

export default Merch;