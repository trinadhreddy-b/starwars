import  { useEffect,useState } from 'react';
import { Avatar,Typography } from '@mui/material';
import axios from 'axios';
import star from "../assets/star.jpg";
import { Link } from 'react-router-dom';

function Starship({url}) {

    const [name,setName]=useState("");
    useEffect(()=>{
        async function fetchStarShip(){
            const response=await axios.get(url)
            setName(response.data.name);
        }
        fetchStarShip();
    },[url])
  return (
    <div>
      <Avatar alt={name} src={star} />
      <Link to={`/films`}> 
      <Typography variant="subtitle1">{name}</Typography>
      </Link>
    </div>
  )
}

export default Starship;