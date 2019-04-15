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
      <Grid item xs={12} sm={6} lg={3}>
        <Typography
          variant="h5"
          style={{
            marginBottom: 20
          }}
        >
          {this.props.name}
        </Typography>
      </Grid>
    );
  }
}
export default NavbarItem;
