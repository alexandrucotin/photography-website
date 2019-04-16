import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12} sm={6} lg={3}>
        <Button
          variant="contained"
          style={{
            marginBottom: 20,
            opacity: 0.6
          }}
        >
          {this.props.name}
        </Button>
      </Grid>
    );
  }
}
export default NavbarItem;
