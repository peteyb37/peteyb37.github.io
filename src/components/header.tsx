import { AppBar, Toolbar, Typography, Box, Button, Icon  } from '@mui/material';
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Spotify from '../assets/Spotify.svg';
import Apple from '../assets/Apple.svg';
import EmailIcon from '@mui/icons-material/Email';
import Budd from '../assets/Budd.svg'
import { useNavigate } from 'react-router-dom';

function Header() {

  const navItems = ["Home", "Music", "Tour", "Contact"]
  const navigate = useNavigate();

  const handleIconClick = (site: String) => {
    if(site === "Spotify"){
      window.open("https://open.spotify.com/artist/56X2nqsClqdDWy6d34rOxC", '_blank');
    }
    if(site === "Apple"){
      window.open("https://music.apple.com/us/artist/peter-budd/1505497748", '_blank');
    }
    if(site === "Youtube"){
      window.open('https://www.youtube.com/channel/UCYPAw2SiHqoEteCLzzX4w_g/featured', '_blank')
    }
    
  }

  const handleMenuClick = (t: any) => {
    if(t === "Home"){
      navigate('/')
    }else if(t === "Music"){
      navigate('/music')
    }else if(t === "Tour"){
      navigate('/tour')
    }else if(t === "Contact"){
      navigate('/contact')
    }
  }

  return (
    <Box sx={{color: '#000000', height: '11.5vh', backgroundColor: 'black'}}>
      <AppBar component="nav" sx={{backgroundColor: 'black'}}>
        <Toolbar>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Box sx={{width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'flex-start'}}>
                {navItems.map((item: any) => (
                  <Button key={item} sx={{ color: '#fff' }} onClick={() => handleMenuClick(item)}>
                    {item}
                  </Button>
                ))}
            </Box>
            <Icon sx={{width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'center', height: '35px', marginTop: '10px'}}>
                <img style={{marginBottom: '8px'}} src={Budd}/>
            </Icon>
            <Box  sx={{width: '33.3%', display: 'flex', flexGrow: 1, justifyContent: 'flex-end'}}>
                <Button onClick={() => handleIconClick("Youtube")} sx={{borderRadius: '100px', border: '2px solid #fca311', width: '40px', height: '40px', marginTop: '3px', "&:hover":{backgroundColor: '#14213d'}}}>
                  <YouTubeIcon sx={{color: 'white'}} />
                </Button>
                <Button onClick={() => handleIconClick("Spotify")} sx={{borderRadius: '100px', border: '2px solid #fca311', width: '40px', height: '40px', marginTop: '3px', marginLeft: '10px', "&:hover":{backgroundColor: '#14213d'}}}>
                  <Icon>
                      <img style={{marginBottom: '8px'}} src={Spotify} height={20} width={20}/>
                  </Icon>
                  </Button>
                  <Button onClick={() => handleIconClick("Apple")} sx={{borderRadius: '100px', border: '2px solid #fca311', width: '40px', height: '40px', marginTop: '3px', marginLeft: '10px', "&:hover":{backgroundColor: '#14213d'}}}>
                  <Icon>
                      <img style={{marginBottom: '7px'}} src={Apple} height={22} width={22}/>
                  </Icon>
                </Button>
                <Button sx={{borderRadius: '100px', border: '2px solid #fca311', height: '40px', marginTop: '3px', width: '40px', marginLeft: '10px', "&:hover":{backgroundColor: '#14213d'}}}>
                  <EmailIcon fontSize="small" sx={{color: 'white'}} />
                </Button>
                
            </Box>
          </Box>
          
        </Toolbar>
        {/*
        <Typography sx={{backgroundColor: '#14213d'}}>
           Color Scheme: #14213d
        </Typography>
        <Typography sx={{backgroundColor: '#fca311'}}>
           Color Scheme: #fca311
        </Typography>
        <Typography sx={{backgroundColor: '#e5e5e5'}}>
           Color Scheme: #e5e5e5
        </Typography>
        <Typography sx={{backgroundColor: '#ffffff', color: 'black'}}>
           Color Scheme:
        </Typography>
              */}
      </AppBar>
    </Box>
  );
}

export default Header;