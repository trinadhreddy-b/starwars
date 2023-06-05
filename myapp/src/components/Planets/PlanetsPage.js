import { Paper, Stack, Typography, Grid} from "@mui/material";

import {Pagination} from '@mui/material';
import { useState, useEffect } from "react";
import { config } from "../../App";
import axios from "axios";
import Character from "../Character";

function Planets() {
  const [planets, setPlanets] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPlanets() {
      const url = config.endpoint + `/planets?page=${page}&format=json`;
      const response = await axios.get(url);
      console.log(response);
      const data = await response.data.results;
      console.log(data);
      setPlanets(data);
    }
    fetchPlanets();
  }, [page]);
  
  const handleChange = (event,value) => {
    setPage(value);
  };

  return (
    <>
        <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Stack direction="row" justifyContent="center">
          <Typography paddingBottom={"2rem"} variant="h4">
            PLANETS
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
        <Pagination
      component="div"
      count={6}
      page={page}
      onChange={handleChange}
    />
    </Stack>
        <Grid container spacing={2} >
          {planets.length>0 &&
            planets.map((planet, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <Character data={planet}/>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
}

export default Planets;






  
 



  
 
