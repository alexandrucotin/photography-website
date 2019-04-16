import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";

class Header extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item>
          <Title />
        </Grid>
        <Grid item>
          <Navbar />
        </Grid>
      </Grid>
    );
  }
}

export default Header;
