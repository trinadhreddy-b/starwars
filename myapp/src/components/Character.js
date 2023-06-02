import React from 'react';
import pic from "../assets/pic.png"
import {Box,Card,CardActions,CardContent,CardMedia} from "@mui/material";
import { Link } from 'react-router-dom';
import star from "../assets/star.jpg";
import planet from "../assets/planet.jpg";

function Character({data}) {

    const url=data.url.split("/");

    if(url[4]==="people"){
    return(
    <Box sx={{ minWidth: 275 }}>
    <Card className="card">
      <CardContent>
        <CardMedia
          component="img"
          alt={data.name}
          image={pic}
        />
      </CardContent>
      <CardActions>
      <Link to={`/actors/${url[5]}`}>
               {data.name}
               </Link>
      </CardActions>
    </Card>
  </Box>
);
    }
else if(url[4]==="starships"){
    return(
        <Box sx={{ minWidth: 275 }}>
        <Card className="card">
          <CardContent>
            <CardMedia
              component="img"
              alt={data.name}
              image={star}
            />
          </CardContent>
          <CardActions>
          <Link to={`/starships/${url[5]}`}>
                   {data.name}
                   </Link>
          </CardActions>
        </Card>
      </Box>
    );
}
else {
  return(
      <Box sx={{ minWidth: 275 }}>
      <Card className="card">
        <CardContent>
          <CardMedia
            component="img"
            alt={data.name}
            image={planet}
          />
        </CardContent>
        <CardActions>
        <Link to={`/planets/${url[5]}`}>
                 {data.name}
                 </Link>
        </CardActions>
      </Card>
    </Box>
  );
}
    
}

export default Character;