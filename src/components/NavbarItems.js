import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  routeChange() {
    let path = `newPath`;
    this.props.history.push(path);
  }
  render() {
    return (
      <Grid item xs={12} sm={6} lg={3}>
        <Button
          variant="outlined"
          style={{
            marginBottom: 20,
            color: "white"
          }}
          onClick={this.routeChange}
        >
          {this.props.name}
        </Button>
      </Grid>
    );
  }
}
export default NavbarItem;
