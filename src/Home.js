import React from "react";
import BottomAppBar from "./components/AppBar";
import Title from "./components/Title";
import Grid from "@material-ui/core/Grid";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <BottomAppBar />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <Title />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
