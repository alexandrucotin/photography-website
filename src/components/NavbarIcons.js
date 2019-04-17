/* eslint-disable no-undef */
import React from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

class NavbarIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  handleActive(e) {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  render() {
    const { isActive } = this.state;
    return (
      <Grid item xs={12} sm={6} lg={1} xl={1}>
        <IconButton aria-label="Icon">
          <Icon
            fontSize="large"
            style={{
              marginBottom: 20,
              color: "white"
            }}
            onClick={e => this.handleActive(e)}
            className={`"hvr-bounce-in" ${isActive ? "pulse" : ""}`}
          >
            {this.props.icon}
          </Icon>
        </IconButton>
      </Grid>
    );
  }
}
export default NavbarIcon;
