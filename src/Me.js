import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Navbar />
        </Grid>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
