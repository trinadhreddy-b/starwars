import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down('xs')]: {
    textAlign: 'center',
  },
}));

const HeaderSearch = styled(TextField)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('xs')]: {
    marginTop: theme.spacing(2),
  },
}));

const HeaderButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Header = ({handleSearchInputChange}) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleButtonClick = (url) => {
    navigate(url);
    handleMobileMenuClose();

  };
 

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    handleSearchInputChange(value);
  };
 

  return (
    <React.Fragment>
      <HeaderAppBar position="static">
        <Toolbar>
          <HeaderTitle variant="h6">
            STARWARS
          </HeaderTitle>
          <HeaderSearch variant="outlined" placeholder="Search..." size="small" onChange={handleInputChange} value={inputValue} />
          <MobileMenuButton edge="start" color="inherit" aria-label="menu" onClick={handleMobileMenuOpen}>
            <MenuIcon />
          </MobileMenuButton>
          <HeaderButton variant="contained" onClick={() => handleButtonClick('/')}>
            Home
          </HeaderButton>
          <HeaderButton variant="contained" onClick={() => handleButtonClick('/actors')}>
            Actors
          </HeaderButton>
          <HeaderButton variant="contained" onClick={() => handleButtonClick('/starships')}>
            Starships
          </HeaderButton>
          <HeaderButton variant="contained" onClick={() => handleButtonClick('/planets')}>
            Planets
          </HeaderButton>
        </Toolbar>
      </HeaderAppBar>
      <Drawer anchor="left" open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
        <List>
          <ListItem  onClick={() => handleButtonClick('/')} >
            <ListItemText primary="Home" style={{ cursor: 'pointer' }}/>
          </ListItem>
          <ListItem  onClick={() => handleButtonClick('/actors')} >
            <ListItemText primary="Actors" style={{ cursor: 'pointer' }}/>
          </ListItem>
          <ListItem  onClick={() => handleButtonClick('/starships')} >
            <ListItemText primary="Starships" style={{ cursor: 'pointer' }} />
          </ListItem>
          <ListItem  onClick={() => handleButtonClick('/planets')} >
            <ListItemText primary="Planets" style={{ cursor: 'pointer' }} />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
