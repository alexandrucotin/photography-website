/* eslint-disable no-undef */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function Dots3() {
  return (
    <Grid item xs={2} className="loading-dots">
      <Typography>
        <p className="dot eleven">.</p>
        <p className="dot twelve">.</p>
        <p className="dot thirteen">.</p>
        <p className="dot fourteen">.</p>
        <p className="dot fiveteen">.</p>
      </Typography>
    </Grid>
  );
}
export default Dots3;
