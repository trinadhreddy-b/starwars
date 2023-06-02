import  { useEffect,useState } from 'react';
import { Avatar,Typography } from '@mui/material';
import axios from 'axios';
import pic from "../../assets/pic.png";
import { Link } from 'react-router-dom';

function ActorAvatar({url}) {

    const id=url.split("/")
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
      <Avatar alt={name} src={pic} />
      <Link to={`/actors/${id[5]}`}> 
      <Typography variant="subtitle1">{name}</Typography>
      </Link>
    </div>
  )
}

export default ActorAvatar;