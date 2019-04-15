/* eslint-disable no-undef */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function Dots2() {
  return (
    <Grid item xs={2} className="loading-dots">
      <Typography>
        <p className="dot six">.</p>
        <p className="dot seven">.</p>
        <p className="dot eight">.</p>
        <p className="dot nine">.</p>
        <p className="dot ten">.</p>
      </Typography>
    </Grid>
  );
}
export default Dots2;
