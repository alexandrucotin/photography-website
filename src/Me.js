import React from "react";
import Navbar from "./components/Navbar";
import Grid from "@material-ui/core/Grid";

class Me extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container direction="column">
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <h1 style={{ color: "white", align: "right" }}>
            This is an ABOUT ME page
          </h1>
        </Grid>
      </Grid>
    );
  }
}

export default Me;
