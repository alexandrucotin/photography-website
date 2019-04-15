import React from "react";
import Typography from "@material-ui/core/Typography";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Typography component="h2" variant="h2" align="center" className="title">
        ALEX COTIN | PHOTOGRAPHER
      </Typography>
    );
  }
}
export default Title;
