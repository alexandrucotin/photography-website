import React from "react";
import CheckBoxCustom from "./CheckBox";
import { Grid } from "@material-ui/core";

function SearchBar() {
  return (
    <div>
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
    </div>
  );
}

export default SearchBar;
