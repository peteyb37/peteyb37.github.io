import { Container, CssBaseline, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import Home from './components/Home';
import Header from './components/header';
import Footer from './components/Footer';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "./components/Music";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";

import "./App.css";
import SuspenseWrapper from "./components/SuspenseWrapper";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/music" element={<Music />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;