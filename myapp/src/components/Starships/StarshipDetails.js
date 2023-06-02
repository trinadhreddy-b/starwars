import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../App";
import axios from "axios";
import { Paper, Grid, Typography, Stack, CardMedia } from "@mui/material";
import star from "../../assets/star.jpg";
import ActorAvatar from "../Actors/ActorAvatar";
import FilmAvatar from "../Films/FilmAvatar";

function StarshipDetails() {
  const { id } = useParams();
  const [starShip, setStarShip] = useState({});

  useEffect(() => {
    async function fetchCharacter() {
      const url = config.endpoint + `/starships/${id}`;
      const response = await axios.get(url);
      const data = await response.data;
      setStarShip(data);
    }
    fetchCharacter();
  }, [id]);

  return (
    <>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Stack direction="row" justifyContent="center">
          <Typography paddingBottom={"2rem"} variant="h4">
            Star Ship Name: {starShip.name}
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt={starShip.name}
              height="250"
              image={star}
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              name: {starShip.name} <br />
              model: {starShip.model} <br />
              manufacturer: {starShip.manufacturer} <br />
              cost_in_credits: {starShip.cost_in_credits} <br />
              length: {starShip.length} <br />
              max_atmosphering_speed: {starShip.max_atmosphering_speed} <br />
              crew: {starShip.crew} <br />
              passengers: {starShip.passengers} <br />
              cargo_capacity: {starShip.cargo_capacity} <br />
              consumables: {starShip.consumables} <br />
              hyperdrive_rating: {starShip.hyperdrive_rating} <br />
              MGLT: {starShip.MGLT} <br />
              starship_class: {starShip.starship_class}
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Pilots:
        </Typography>
        <Grid container spacing={2}>
          {starShip.pilots &&
            starShip.pilots.map((pilot, index) => (
              <Grid item xs={4} md={2} key={index}>
                <ActorAvatar url={pilot} />
              </Grid>
            ))}
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Films
        </Typography>
        <Grid container spacing={2}>
          {starShip.films &&
            starShip.films.map((film, index) => (
              <Grid item xs={4} md={2} key={index}>
                <FilmAvatar url={film} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
}

export default StarshipDetails;
