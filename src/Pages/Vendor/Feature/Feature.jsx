import React from "react";
import { Grid } from "@mui/material";
// import {div}

const Feature = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid div xs={12} sm={6} md={4}>
          <div>1hello there</div>
        </Grid>
        <Grid div xs={12} sm={6} md={4}>
          <div>the hwdwd d</div>
        </Grid>
        <Grid div xs={12} sm={6} md={4}>
          <div>Lorem ipsum dolor sit amet.</div>
        </Grid>
        <Grid div xs={2} sm={6} md={4}>
          <div>lorem3 s</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Feature;
