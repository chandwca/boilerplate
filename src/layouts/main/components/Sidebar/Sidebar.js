// SimpleSidebar.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, Button } from '@mui/material';
import { makeStyles } from 'mui-styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '200px',
    backgroundColor: 'white', // Change background color to white
    padding: theme.spacing(2),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    width: '100%',
    textAlign: 'left',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary, // Set text color to the primary text color
  },
  activeButton: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  }
}));

const Sidebar = () => {
  const classes = useStyles();

  const pages = [
    { title: 'Dashboard', path: '/' },
    { title: 'Settings', path: '/settings' }, // Update path for the 'Settings' page
    { title: 'Yoorz Pro', path: '/yoorz-pro' }, // Update path for the 'Yoorz Pro' page
  ];

  // Assuming you have a way to determine the active path (e.g., using react-router)
  const activePath = '/' /* Replace with the actual active path */;

  return (
    <List component="nav" className={classes.root}>
      {pages.map(page => (
        <ListItem key={page.title} disableGutters>
          <Button
            component={RouterLink}
            to={page.path}
            className={`${classes.button} ${page.path === activePath ? classes.activeButton : ''}`}
            color="inherit"
          >
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
