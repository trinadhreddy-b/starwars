import  { useEffect,useState } from 'react';
import { Avatar,Typography } from '@mui/material';
import axios from 'axios';
import planet from "../../assets/planet.jpg";
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
function PlanetAvatar({url}) {

    const [name,setName]=useState("");
    const [isLoading,setLoading]=useState(false);
    const id=url.split("/");
    useEffect(()=>{
        async function fetchActor(){
          try{
            setLoading(true);
            const response=await axios.get(url)
            setName(response.data.name);
          }
          catch{

          }
          setLoading(false);
        }
        fetchActor();
    },[url])
  return (
    <>
    {isLoading ? (<CircularProgress />):
    <div>
      <Avatar alt={name} src={planet} />
      <Link to={`/planets/${id[5]}`}> 
      <Typography variant="subtitle1">{name}</Typography>
      </Link>
    </div>
}
</>
  )
}

export default PlanetAvatar;