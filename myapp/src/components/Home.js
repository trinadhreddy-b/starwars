import React from "react";
import { useState, useEffect } from "react";
import { config } from "../App";
import axios from "axios";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const url = config.endpoint + "/films";
      const response = await axios.get(url);
      const movieData = response.data.results.sort(
        (a, b) => a.episode_id - b.episode_id
      );
      console.log(movieData);
      setMovies([...movieData]);
    }
    fetchMovies();
  }, []);
  return (
    <Box sx={{ padding: "2rem" }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {movies.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.episode_id}>
            <MovieCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
