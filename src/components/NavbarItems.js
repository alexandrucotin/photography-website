/* eslint-disable no-undef */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid item xs={3}>
        <Typography variant="h6" color="inherit">
          {this.props.name}
        </Typography>
      </Grid>
    );
  }
}
export default NavbarItem;
