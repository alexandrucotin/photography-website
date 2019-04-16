/* eslint-disable no-undef */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

class NavbarIcon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid item xs={1} sm={1} lg={1}>
        <Typography>
          <Icon
            fontSize="large"
            style={{
              marginBottom: 20,
              color: "white"
            }}
          >
            {this.props.icon}
          </Icon>
        </Typography>
      </Grid>
    );
  }
}
export default NavbarIcon;
