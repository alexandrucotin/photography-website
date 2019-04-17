import React from "react";
import Navbar from "./components/Navbar";
import Grid from "@material-ui/core/Grid";

class Blog extends React.Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <h1 style={{ color: "white", align: "right" }}>This my Blog!</h1>
        </Grid>
      </Grid>
    );
  }
}

export default Blog;
