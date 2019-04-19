import React from "react";
import BottomAppBar from "./components/AppBar";
import Grid from "@material-ui/core/Grid";

class Me extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="me">
        <Grid container>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <BottomAppBar />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <h1 style={{ color: "white", align: "right" }}>
              This is an ABOUT ME page
            </h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Me;
