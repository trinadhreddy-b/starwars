import  { useEffect,useState } from 'react';
import { Avatar,Typography } from '@mui/material';
import axios from 'axios';
import star from "../../assets/star.jpg";
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

function StarshipAvatar({url}) {

    const [name,setName]=useState("");
    const [isLoading,setLoading]=useState(false);
    const id=url.split("/");
    useEffect(()=>{
        async function fetchStarShip(){
          try{
            setLoading(true)
            const response=await axios.get(url)
            setName(response.data.name);
          }
          catch{

          }
          setLoading(false);
        }
        fetchStarShip();
    },[url])
  return (
    <>
    {isLoading ? (<CircularProgress />):
    <div>
      <Avatar alt={name} src={star} />
      <Link to={`/starships/${id[5]}`}> 
      <Typography variant="subtitle1">{name}</Typography>
      </Link>
    </div>
}
</>
  )
}

export default StarshipAvatar;