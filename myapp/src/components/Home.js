import React from 'react';
import { useState,useEffect } from 'react';
import { config } from '../App';
import axios from 'axios';
import { Box } from '@mui/material';

function Home() {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchMovies(){
            const url=config.endpoint+"/films";
            const response= await axios.get(url);
            const movieData=response.data.results;
            console.log(movieData)
            setMovies([...movieData])
            
        }     
        fetchMovies();

    },[])
  return (
    <Box>
    <div>Home</div>
    <ul>
    {movies.map(item=>(
        <li key={item.episode_id}>
            {item.title}
        </li>
    ))}
    </ul>
    </Box>
  )
}

export default Home