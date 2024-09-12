import react, { useState } from 'react';
import { 
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Icon
 } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
 import { useNavigate } from 'react-router-dom';
 import Budd from '../assets/Budd.svg'

 const drawerWidth = 240;
 const navItems = ['Home', 'Music', 'Projects', 'Contact'];

function HeaderMobile() {

    const navigate = useNavigate();

    const navPage = (item: any) => {
        if(item === "Home"){
            navigate('/')
          }else if(item === "Music"){
            navigate('/music')
          }else if(item === "Projects"){
            navigate('/projects')
          }else if(item === "Contact"){
            navigate('/contact')
          }
    }


  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ height: '100%', textAlign: 'center', backgroundColor: 'black', borderRight: '1px solid #912F40' }}>
          <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
            BUDD
          </Typography>
          <Divider sx={{color: 'white', backgroundColor: 'white'}}/>
          <List>
            {navItems.map((item: any) => (
              <ListItem key={item} disablePadding sx={{borderBottom: '0.5px solid #912F40'}}>
                <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navPage(item)}>
                  <ListItemText primary={item} sx={{color: 'white'}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

      //const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <Box>
        <AppBar component="nav" sx={{backgroundColor: 'black', borderBottom: '1px solid #912F40'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            BUDD
          </Typography>
          <Icon sx={{marginLeft: '-33.3px',width: '33.3%', flexGrow: 1, display: 'flex', justifyContent: 'center', height: '35px', marginTop: '10px'}}>
                <img style={{marginBottom: '8px'}} src={Budd}/>
            </Icon>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item: any) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
    )


}

export default HeaderMobile;