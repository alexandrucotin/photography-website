import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Dots from "./Dots";
import Dots2 from "./Dots2";
import Dots3 from "./Dots3";
import NavbarIcon from "./NavbarIcons";
import { NavLink } from "react-router-dom";

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

const checkActive = (match, location) => {
  //some additional logic to verify you are in the home URI
  if (!location) return false;
  const { pathname } = location;
  return pathname === "/";
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
        <NavLink to="/" activeClassName="pulse" isActive={checkActive}>
          <NavbarIcon icon={"home"} />
        </NavLink>
        <Dots />
        <NavLink to="/Me" activeClassName="pulse" isActive={checkActive}>
          <NavbarIcon icon={"face"} />
        </NavLink>
        <Dots2 />
        <NavLink to="/Portfolio" activeClassName="pulse" isActive={checkActive}>
          <NavbarIcon icon={"photo_camera"} />
        </NavLink>
        <Dots3 />
        <NavLink to="/Blog" activeClassName="pulse" isActive={checkActive}>
          <NavbarIcon icon={"format_align_justify"} />
        </NavLink>
      </Grid>
    </AppBar>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
