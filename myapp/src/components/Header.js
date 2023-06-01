import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

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
}));

const Header = () => {
    const navigate=useNavigate();

    const handleClick=(url)=>{
        navigate(url);
    }
  return (
    <HeaderAppBar position="static">
      <Toolbar>
        <HeaderTitle variant="h6">
          STAR WARS
        </HeaderTitle>
        <HeaderSearch variant="outlined" placeholder="Search..." size="small" />
        <HeaderButton variant="contained" onClick={()=>{handleClick("/")}}>Home</HeaderButton>
        <HeaderButton variant="contained" onClick={()=>{handleClick("/actors")}}>Actors</HeaderButton>
        <HeaderButton variant="contained" onClick={()=>{handleClick("/starships")}}>Starships</HeaderButton>
        <HeaderButton variant="contained" onClick={()=>{handleClick("/planets")}}>Planets</HeaderButton>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
