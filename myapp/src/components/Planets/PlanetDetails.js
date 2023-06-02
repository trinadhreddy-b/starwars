import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../App";
import axios from "axios";
import { Paper, Grid, Typography, Stack, CardMedia } from "@mui/material";
import star from "../../assets/star.jpg";
import ActorAvatar from "../Actors/ActorAvatar";
import FilmAvatar from "../Films/FilmAvatar";

function PlanetDetails() {
  const { id } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    async function fetchCharacter() {
      const url = config.endpoint + `/planets/${id}`;
      const response = await axios.get(url);
      const data = await response.data;
      setPlanet(data);
    }
    fetchCharacter();
  }, [id]);

  return (
    <>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Stack direction="row" justifyContent="center">
          <Typography paddingBottom={"2rem"} variant="h4">
            Planet Name: {planet.name}
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt={planet.name}
              height="250"
              image={star}
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
            
            rotation_period: {planet.rotation_period} <br /> 
            orbital_period: {planet.orbital_period} <br />
            diameter: {planet.diameter} <br /> 
            climate: {planet.climate} <br /> 
            gravity: {planet.gravity} <br /> 
            terrain: {planet.terrain} <br /> 
            surface_water: {planet.surface_water} <br /> 
            population: {planet.population} <br />
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Residents:
        </Typography>
        <Grid container spacing={2}>
          {planet.residents &&
            planet.residents.map((people, index) => (
              <Grid item xs={4} md={2} key={index}>
                <ActorAvatar url={people} />
              </Grid>
            ))}
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Films
        </Typography>
        <Grid container spacing={2}>
          {planet.films &&
            planet.films.map((film, index) => (
              <Grid item xs={4} md={2} key={index}>
                <FilmAvatar url={film} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
}

export default PlanetDetails;
