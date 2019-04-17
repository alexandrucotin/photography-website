import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Dots from "./Dots";
import Dots2 from "./Dots2";
import Dots3 from "./Dots3";
import NavbarIcon from "./NavbarIcons";
import { Link } from "@reach/router";

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
    height: 150,
    boxShadow: "10px -9px 5px 0px  rgba(241, 90, 34, .1)"
  }
};

function BottomAppBar(props) {
  const { classes } = props;
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      align="center"
      style={{
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        opacity: 0.8,
        shadows: -2 - 15
      }}
    >
      <Grid
        container
        spacing={0}
        style={{
          justifyContent: "center"
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavbarIcon icon={"home"} />
        </Link>
        <Dots />
        <Link to="/Me" style={{ textDecoration: "none" }}>
          <NavbarIcon icon={"face"} />
        </Link>
        <Dots2 />
        <Link to="/Portfolio" style={{ textDecoration: "none" }}>
          <NavbarIcon icon={"photo_camera"} />
        </Link>
        <Dots3 />
        <Link to="/Blog" style={{ textDecoration: "none" }}>
          <NavbarIcon icon={"format_align_justify"} />
        </Link>
      </Grid>
    </AppBar>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
