/* eslint-disable no-undef */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function Dots() {
  return (
    <Grid item xs={2} className="loading-dots">
      <Typography>
        <p className="dot one">.</p>
        <p className="dot two">.</p>
        <p className="dot three">.</p>
        <p className="dot four">.</p>
        <p className="dot five">.</p>
      </Typography>
    </Grid>
  );
}
export default Dots;
