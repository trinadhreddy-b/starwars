import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import { roman } from "../App";
import "./MovieCard.css";

export default function MovieCard({ item}) {
  
  const url=item.url.split("/");
 
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card className="card">
        <CardContent>
          <CardMedia
            component="img"
            alt={item.title}
            image={require(`../assets/episode${url[5]}.jpg`)}
          />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Episode {roman[item.episode_id]}: {item.title}
          </Typography>
          <Typography variant="body2">
            Director: {item.director}
            <br />
            Producer: {item.producer}
            <br />
            Release Date: {item.release_date}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/films/${url[5]}`}>
                 Movie Details...
                 </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
