import React from "react";
import Grid from "@material-ui/core/Grid";

class SocialBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container direction="row" className="social-bar" spacing={24}>
        <Grid item>
          <p>Instagram</p>
        </Grid>
        <Grid item>
          <p>Facebook</p>
        </Grid>
        <Grid item>
          <p>Youtube</p>
        </Grid>
      </Grid>
    );
  }
}
export default SocialBar;
