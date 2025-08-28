import { Container, CssBaseline, Grid, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import Home from './components/Home';
import Header from './components/header';
import Footer from './components/Footer';

import "./App.css";
import SuspenseWrapper from "./components/SuspenseWrapper";

function App() {

  const [scrollDirective, setScrollDirective] = useState(false);

  const triggerLeftMenu = () => {
    setScrollDirective(!scrollDirective);
  }


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <Header triggerLeftMenu={triggerLeftMenu} />
      <Home leftMenuClicked={scrollDirective} triggerLeftMenu={triggerLeftMenu} />
      <Footer />
    </Box>
  );
}

export default App;