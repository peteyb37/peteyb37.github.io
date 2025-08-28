import { AppBar, Toolbar, Typography, Box, Button, Icon, Drawer, Divider  } from '@mui/material';
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface ButtonProps {
  triggerLeftMenu: () => void;
}

function Header({triggerLeftMenu}: ButtonProps) {

  /*
    Need to add left menu here, while keeping the typography in the center
    Need to somehow get the refs from the other file
    One more ref for top of page and also apply it to the ptbudd at the top of the page
    Those typography components have to be wrapped in boxes for easier clicking
    
    <Button onClick={() => setScrollView(contactRef)}>new button</Button>
  */

  const clickLeftMenu = () => {
    triggerLeftMenu()
  }

  return (
    <Box sx={{padding: '0.5rem 1rem', textAlign: 'center', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
      <Box sx={{width: '40px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <MenuIcon onClick={clickLeftMenu} sx={{color: 'white', cursor: 'pointer'}} />
      </Box>
      <Typography sx={{fontSize: '20px', marginLeft: '-10px'}}>ptbudd</Typography>
      <Box sx={{width: '40px', color: 'white', display: 'hidden'}}></Box>
    </Box>
  );
}

export default Header;