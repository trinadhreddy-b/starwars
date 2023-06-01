import { Paper, Stack, Typography, Grid} from "@mui/material";

import {Pagination} from '@mui/material';
import { useState, useEffect } from "react";
import { config } from "../App";
import axios from "axios";
import Character from "./Character";
import Header from "./Header";
function Actors() {
  const [actors, setActors] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchActors() {
      const url = config.endpoint + `/people?page=${page}&format=json`;
      const response = await axios.get(url);
      console.log(response);
      const data = await response.data.results;
      console.log(data);
      setActors(data);
    }
    fetchActors();
  }, [page]);
  
  const handleChange = (event,value) => {
    setPage(value);
  };

  return (
    <>
    <Header />
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Stack direction="row" justifyContent="center">
          <Typography paddingBottom={"2rem"} variant="h4">
            CHARACTERS
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
        <Pagination
      component="div"
      count={9}
      page={page}
      onChange={handleChange}
    />
    </Stack>
        <Grid container spacing={2} >
          {actors.length>0 &&
            actors.map((actor, index) => (
              <Grid item xs={4} md={4} key={index}>
                <Character data={actor}/>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
}

export default Actors;






  
 



  
 
