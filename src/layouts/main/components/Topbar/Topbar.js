// src/components/TopNav.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Topbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">YOORZ</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
