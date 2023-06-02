import  { useEffect,useState } from 'react';
import { Avatar,Typography } from '@mui/material';
import axios from 'axios';
import starwar from "../../assets/starwar.png";
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

function FilmAvatar({url}) {

    const [name,setName]=useState("");
    const [isLoading,setLoading]=useState(false);
    const id=url.split("/");
    useEffect(()=>{
        async function fetchFilmAvatar(){
          try{
            setLoading(true);
            const response=await axios.get(url)
            setName(response.data.title);
          }
          catch{

          }
          setLoading(false);
        }
        fetchFilmAvatar();
    },[url])
  return (
    <>
    {isLoading ? (<CircularProgress />):
    <div>
      <Avatar alt={name} src={starwar} />
      <Link to={`/films/${id[5]}`}> 
      <Typography variant="subtitle1">{name}</Typography>
      </Link>
    </div>
    }
    </>
  )
}

export default FilmAvatar;