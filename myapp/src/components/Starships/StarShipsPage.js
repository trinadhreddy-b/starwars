import { Paper, Stack, Typography, Grid } from "@mui/material";

import { Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { config } from "../../App";
import axios from "axios";
import Character from "../Character";

function StarShip() {
  const [ships, setShips] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchActors() {
      const url = config.endpoint + `/starships?page=${page}&format=json`;
      const response = await axios.get(url);
      console.log(response);
      const data = await response.data.results;
      console.log(data);
      setShips(data);
    }
    fetchActors();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Paper sx={{ padding: "2rem", margin: "1rem" }}>
        <Stack direction="row" justifyContent="center">
          <Typography paddingBottom={"2rem"} variant="h4">
            STARSHIPS
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Pagination
            component="div"
            count={4}
            page={page}
            onChange={handleChange}
          />
        </Stack>
        <Grid container spacing={2} >
          {ships.length > 0 &&
            ships.map((ship, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <Character data={ship} />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </>
  );
}

export default StarShip;
