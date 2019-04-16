/* eslint-disable no-undef */
import React from "react";
import Grid from "@material-ui/core/Grid";

function Dots2() {
  return (
    <Grid item xs={2} sm={2} lg={2}>
      <div className="loading-dots">
        <p className="dot six">.</p>
        <p className="dot seven">.</p>
        <p className="dot eight">.</p>
        <p className="dot nine">.</p>
        <p className="dot ten">.</p>
      </div>
    </Grid>
  );
}
export default Dots2;
