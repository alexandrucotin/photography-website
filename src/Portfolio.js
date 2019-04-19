import React from "react";
import BottomAppBar from "./components/AppBar";
import Grid from "@material-ui/core/Grid";
import GridPort from "./components/Grid";
import SearchBar from "./components/SearchBar";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="portfolio">
        <Grid container>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <BottomAppBar />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <h1 style={{ color: "white", align: "right" }}>
              This my Portfolio!
            </h1>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={12}>
            <GridPort />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
