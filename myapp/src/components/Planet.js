import  { useEffect,useState } from 'react';
import { Avatar,Typography } from '@mui/material';
import axios from 'axios';
import planet from "../assets/planet.jpg";

function Planet({url}) {

    const [name,setName]=useState("");
    useEffect(()=>{
        async function fetchActor(){
            const response=await axios.get(url)
            setName(response.data.name);
        }
        fetchActor();
    },[url])
  return (
    <div>
      <Avatar alt={name} src={planet} />
      <Typography variant="subtitle1">{name}</Typography>
    </div>
  )
}

export default Planet;