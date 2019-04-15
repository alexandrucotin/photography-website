/* eslint-disable no-undef */
import React from "react";
import Grid from "@material-ui/core/Grid";

function Dots() {
  return (
    <Grid item xs={2}>
      <div className="loading-dots">
        <p className="dot one">.</p>
        <p className="dot two">.</p>
        <p className="dot three">.</p>
        <p className="dot four">.</p>
        <p className="dot five">.</p>
      </div>
    </Grid>
  );
}
export default Dots;
