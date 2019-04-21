import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Dots from "./Dots";
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
    height: "10rem",
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
        direction="row"
        style={{
          justifyContent: "center"
        }}
      >
        <Grid item xs={6} xl={1}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <NavbarIcon icon={"home"} />
          </NavLink>
        </Grid>
        <Dots
          dotNum={"one"}
          dotNum2={"two"}
          dotNum3={"three"}
          dotNum4={"four"}
          dotNum5={"five"}
        />
        <Grid item xs={6} xl={1}>
          <NavLink to="/Me" style={{ textDecoration: "none" }}>
            <NavbarIcon icon={"face"} />
          </NavLink>
        </Grid>
        <Dots
          dotNum={"six"}
          dotNum2={"seven"}
          dotNum3={"eight"}
          dotNum4={"nine"}
          dotNum5={"ten"}
        />
        <Grid item xs={6} xl={1}>
          <NavLink to="/Portfolio" style={{ textDecoration: "none" }}>
            <NavbarIcon icon={"photo_camera"} />
          </NavLink>
        </Grid>
        <Dots
          dotNum={"eleven"}
          dotNum2={"twelve"}
          dotNum3={"thirteen"}
          dotNum4={"fourteen"}
          dotNum5={"fiveteen"}
        />
        <Grid item xs={6} xl={1}>
          <NavLink to="/Blog" style={{ textDecoration: "none" }}>
            <NavbarIcon icon={"format_align_justify"} />
          </NavLink>
        </Grid>
      </Grid>
    </AppBar>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
