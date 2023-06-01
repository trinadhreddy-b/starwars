import { Paper, Stack, Typography, Grid, CardMedia } from "@mui/material";
import { roman } from "../App";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { config } from "../App";
import axios from "axios";
import Planet from "./Planet";
import ActorCard from "./ActorCard";
function Films() {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    async function fetchFilm() {
      const url = config.endpoint + `/films/${id}`;
      const response = await axios.get(url);
      console.log(response);
      const data = await response.data;

      setItem(data);
    }
    fetchFilm();
  }, [id]);

  return (
    <>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Stack direction="row" justifyContent="center">
          <Typography paddingBottom={"2rem"} variant="h4">
            Episode {roman[item.episode_id]}:{item.title}
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={require(`../assets/episode${id}.jpg`)}
              sx={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Director: {item.director}
              <br />
              Producer: {item.producer}
              <br />
              Release Date: {item.release_date}
              <br />
              Opening Crawl: {item.opening_crawl}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          CHARACTERS
        </Typography>
        <Grid container spacing={2}>
          {item.characters &&
            item.characters.map((actor, index) => (
              <Grid item xs={4} md={2} key={index}>
                <ActorCard url={actor} />
              </Grid>
            ))}
        </Grid>
      </Paper>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Typography paddingBottom={"1rem"} variant="h4">
          PLANETS
        </Typography>
        <Grid container spacing={2}>
          {item.planets &&
            item.planets.map((planet, index) => (
              <Grid item xs={4} md={2} key={index}>
                <Planet url={planet} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
}

export default Films;
