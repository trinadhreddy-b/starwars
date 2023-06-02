import { Typography, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { config } from '../../App';
import axios from 'axios';
import ActorAvatar from '../Actors/ActorAvatar';
import StarshipAvatar from '../Starships/StarshipAvatar';
import PlanetAvatar from '../Planets/PlanetAvatar';


function SearchResults({searchQuery}) {

    const [actors,setActors]=useState([]);
    const [starships,setStarships]=useState([]);
    const [planets,setPlanets]=useState([]);

  useEffect(()=>{

    async function searchData(){
      const actorData=await axios.get(config.endpoint+`/people/?search=${searchQuery}&format=json`);
      const actorDataResults=actorData.data.results;
      setActors(actorDataResults);
      const starShipData=await axios.get(config.endpoint+`/starships/?search=${searchQuery}&format=json`);
      const starShipDataResults=starShipData.data.results;
      setStarships(starShipDataResults);
      const planetData=await axios.get(config.endpoint+`/planets/?search=${searchQuery}&format=json`);
      const planetDataResults=planetData.data.results;
      setPlanets(planetDataResults);
    }
    searchData();
  },[searchQuery])
  return (
    <>
    <Typography padding={"2rem"} variant='h5'>Search Results for {searchQuery}</Typography>
    <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Actors
        </Typography>
        <Grid container spacing={2}>
          {actors.length>0 &&
            actors.map((actor, index) => (
              <Grid item xs={4} md={2} key={index}>
               <ActorAvatar url={actor.url} />
              </Grid>
            ))}
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Star Ships
        </Typography>
        <Grid container spacing={2}>
          {starships.length>0 &&
            starships.map((starShip, index) => (
              <Grid item xs={4} md={2} key={index}>
               <StarshipAvatar url={starShip.url} />
              </Grid>
            ))}
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Planets
        </Typography>
        <Grid container spacing={2}>
          {planets.length>0 &&
            planets.map((planet, index) => (
              <Grid item xs={4} md={2} key={index}>
               <PlanetAvatar url={planet.url} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  )
}

export default SearchResults;