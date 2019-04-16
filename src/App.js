import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Title />
        </Grid>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <Navbar />
        </Grid>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
