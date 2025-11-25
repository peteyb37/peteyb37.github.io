import { Box, Typography  } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{padding: '0.5rem 1rem', textAlign: 'center', backgroundColor: 'black', color: 'white'}}>
      <Typography sx={{fontSize: '10px', fontStyle: 'italic'}}>~This website is not yet a complete product~</Typography>
    </Box>
  )
}

export default Footer;