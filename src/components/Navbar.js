/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Dots from "./Dots";
import Dots2 from "./Dots2";
import Dots3 from "./Dots3";
import NavbarItem from "./NavbarItems";
import NavbarIcon from "./NavbarIcons";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    alignItems: "center"
  },
  appBar: {
    top: "auto",
    bottom: 0,
    height: 150
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="default"
        className={classes.appBar}
        align="center"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Grid
          container
          spacing={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <NavbarItem name={"Home"} />
          <NavbarItem name={"Me"} />
          <NavbarItem name={"Portfolio"} />
          <NavbarItem name={"Blog"} />
          <NavbarIcon icon={"home"} />
          <Dots />
          <NavbarIcon icon={"face"} />
          <Dots2 />
          <NavbarIcon icon={"photo_camera"} />
          <Dots3 />
          <NavbarIcon icon={"format_align_justify"} />
        </Grid>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
