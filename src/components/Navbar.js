import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import NavbarDots from "./NavbarDots";
import BEDots from "./BEDots";
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
    height: "6rem"
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <AppBar
      className={classes.appBar}
      align="center"
      style={{
        justifyContent: "center",
        background: "black",
        opacity: 0.6
      }}
    >
      <Grid container direction="row" alignContent="center">
        <Grid item lg={1} xl={1}>
          <BEDots dotNum={"one"} dotNum2={"two"} />
        </Grid>
        <Grid item xs={3} sm={3} lg={1} xl={1}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <NavbarIcon icon={"home"} />
          </NavLink>
        </Grid>
        <Grid item lg={2} xl={2}>
          <NavbarDots
            dotNum={"three"}
            dotNum2={"four"}
            dotNum3={"five"}
            dotNum4={"six"}
            dotNum5={"seven"}
          />
        </Grid>
        <Grid item xs={3} sm={3} lg={1} xl={1}>
          <NavLink to="/Me" style={{ textDecoration: "none" }}>
            <NavbarIcon icon={"face"} />
          </NavLink>
        </Grid>
        <Grid item lg={2} xl={2}>
          <NavbarDots
            dotNum={"eight"}
            dotNum2={"nine"}
            dotNum3={"ten"}
            dotNum4={"eleven"}
            dotNum5={"twelve"}
          />
        </Grid>
        <Grid item xs={3} sm={3} lg={1} xl={1}>
          <NavLink to="/Portfolio" style={{ textDecoration: "none" }}>
            <NavbarIcon icon={"photo_camera"} />
          </NavLink>
        </Grid>
        <Grid item lg={2} xl={2}>
          <NavbarDots
            dotNum={"thirteen"}
            dotNum2={"fourteen"}
            dotNum3={"fiveteen"}
            dotNum4={"sixteen"}
            dotNum5={"seventeen"}
          />
        </Grid>
        <Grid item xs={3} sm={3} lg={1} xl={1}>
          <NavLink to="/Blog" style={{ textDecoration: "none" }}>
            <NavbarIcon icon={"format_align_justify"} />
          </NavLink>
        </Grid>
        <Grid itemlg={1} xl={1}>
          <BEDots dotNum={"eighteen"} dotNum2={"nineteen"} />
        </Grid>
      </Grid>
    </AppBar>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
