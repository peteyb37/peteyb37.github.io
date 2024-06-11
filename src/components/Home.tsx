import { Box, Typography  } from '@mui/material';
import React from 'react';
import stockPhoto from '../assets/stockGuitarBGPhoto.jpg';


import Header from './header';
function Home() {

  

  return (
    <Box sx={{borderTop: '3px solid #14213d', display: 'flex', flexDirection: 'column', height: '80vh', backgroundImage: `url(${stockPhoto})`, backgroundRepeat: 'no-repeat', width: '100%', backgroundPosition: 'center center'}}>
      <Box sx={{margin: '60px 90px 90px 90px', clipPath: 'polygon(3% 0, 100% 0, 100% 100%, 0 100%, 0 25%)'}}>
        <Typography sx={{color: 'white', fontSize: '60px', fontStyle: 'italic', backgroundColor: '#14213d90', width: '40%', paddingLeft: '30px', clipPath: 'polygon(3% 0, 100% 0, 100% 100%, 0 100%, 0 25%)'}}>Home</Typography>
      </Box>
    </Box>
  )
}

export default Home;