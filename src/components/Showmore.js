import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PhotoIcon from "@material-ui/icons/Photo";
import { Link } from "react-router-dom";

const styles = {
  root: {
    width: 500
  }
};

class Showmore extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          style={{ textDecoration: "none" }}
          to="grid"
          label="View Photos"
          icon={<PhotoIcon />}
        />
      </BottomNavigation>
    );
  }
}

Showmore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Showmore);
