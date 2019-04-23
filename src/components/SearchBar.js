import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CheckBoxCustom from "./CheckBox";
import { Grid } from "@material-ui/core";

function SearchBar() {
  return (
    <div>
      <AppBar position="static">
        <Grid container>
          <Grid item>
            <CheckBoxCustom />
          </Grid>
          <Grid item>
            <CheckBoxCustom />
          </Grid>
          <Grid item>
            <CheckBoxCustom />
          </Grid>
          <Grid item>
            <CheckBoxCustom />
          </Grid>
          <Grid item>
            <CheckBoxCustom />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default SearchBar;
