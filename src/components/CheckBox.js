import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

class CheckboxCustom extends React.Component {
  render() {
    return (
      <FormGroup style={{ color: "white" }}>
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              value="checkedI"
              style={{ color: "white" }}
            />
          }
          style={{ color: "white" }}
          label="Night"
        />
      </FormGroup>
    );
  }
}

export default CheckboxCustom;
