import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Paper square elevation={3} style={{ padding: '10px', marginTop: 'auto',position:'sticky',heigh:'10pxs'}}>
      <Typography variant="body2" align="center" color="textSecondary">
        © {new Date().getFullYear()} YOORZ.ME. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
