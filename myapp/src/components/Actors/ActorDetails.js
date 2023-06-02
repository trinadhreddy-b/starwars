import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../App";
import axios from "axios";
import { Paper, Grid, Typography, Stack, CardMedia } from "@mui/material";
import pic from "../../assets/pic.png";
import Starship from "../Starships/StarshipAvatar";
import FilmAvatar from "../Films/FilmAvatar";

function ActorDetails() {
  const { id } = useParams();
  const [actor, setActor] = useState({});

  useEffect(() => {
    async function fetchCharacter() {
      const url = config.endpoint + `/people/${id}`;
      const response = await axios.get(url);
      const data = await response.data;
      setActor(data);
      console.log(data);
    }
    fetchCharacter();
  }, [id]);

  return (
    <>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Stack direction="row" justifyContent="center">
          <Typography paddingBottom={"2rem"} variant="h4">
            Actor Name: {actor.name}
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={pic}
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Birth Year: {actor.birth_year}
              <br />
              Height: {actor.height}
              <br />
              Mass: {actor.mass}
              <br />
              Gender: {actor.gender}
              <br />
              Hair Color: {actor.hair_color}
              <br />
              Skin Color: {actor.skin_color}
              <br />
              Homeworld: Unknown
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Star Ships
        </Typography>
        <Grid container spacing={2}>
          {actor.starships &&
            actor.starships.map((ship, index) => (
              <Grid item xs={4} md={2} key={index}>
                <Starship url={ship} />
              </Grid>
            ))}
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          Films
        </Typography>
        <Grid container spacing={2}>
          {actor.films &&
            actor.films.map((film, index) => (
              <Grid item xs={4} md={2} key={index}>
                <FilmAvatar url={film} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
}

export default ActorDetails;
