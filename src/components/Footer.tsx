import { Box, Typography  } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{padding: '0.5rem 1rem', textAlign: 'center', backgroundColor: 'black', color: 'white'}}>
      <Typography sx={{fontSize: '10px', fontStyle: 'italic'}}>~No AI was used in the creation of this website~</Typography>
    </Box>
  )
}

export default Footer;