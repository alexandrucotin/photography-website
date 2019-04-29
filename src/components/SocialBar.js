import React from "react";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

class SocialBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container direction="row" className="social-bar">
        <Grid item className="icon-style">
          <FontAwesomeIcon icon={faInstagram} className="instagram-hover" />
        </Grid>
        <Grid item className="icon-style">
          <FontAwesomeIcon icon={faYoutube} className="youtube-hover" />
        </Grid>
        <Grid item className="icon-style">
          <FontAwesomeIcon icon={faFacebookSquare} className="facebook-hover" />
        </Grid>
      </Grid>
    );
  }
}

export default SocialBar;
