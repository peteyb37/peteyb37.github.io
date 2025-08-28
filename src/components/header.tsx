import { AppBar, Toolbar, Typography, Box, Button, Icon, Drawer, Divider  } from '@mui/material';
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ButtonProps {
  triggerLeftMenu: () => void;
}

function Header({triggerLeftMenu}: ButtonProps) {

  const openGithub = () => {
    window.open("https://github.com/peteyb37/peteyb37.github.io", '_blank');
  }

  const clickLeftMenu = () => {
    triggerLeftMenu()
  }

  return (
    <Box sx={{padding: '0.5rem 1rem', textAlign: 'center', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
      <Box sx={{width: '40px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <MenuIcon onClick={clickLeftMenu} sx={{color: 'white', cursor: 'pointer'}} />
      </Box>
      <Typography sx={{fontSize: '20px', marginLeft: '-10px'}}>ptbudd</Typography>
      <Box sx={{width: '40px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <GitHubIcon onClick={openGithub} sx={{color: 'white', cursor: 'pointer'}} />
      </Box>
    </Box>
  );
}

export default Header;