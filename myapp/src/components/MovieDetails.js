import { Paper, Stack, Typography, Grid, CardMedia } from "@mui/material";
import { roman } from "../App";
import { useLocation } from "react-router-dom";

function MovieDetails() {
  const location = useLocation();
  const item = location.state;

  return (
    <Paper sx={{ padding: "2rem",margin:"1rem" }} >
      <Stack direction="row" justifyContent="center">
        <Typography paddingBottom={"2rem"}>
          Episode {roman[item.episode_id]}:{item.title}
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image={require(`../assets/episode${item.episode_id}.jpg`)}
            sx={{objectFit:"contain"}}
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
  );
}

export default MovieDetails;
