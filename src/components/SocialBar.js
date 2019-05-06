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
          <a
            href="https://www.instagram.com/alexcotinphoto/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon icon={faInstagram} className="instagram-hover" />
          </a>
        </Grid>
        <Grid item className="icon-style">
          <a
            href="https://www.youtube.com/channel/UCLPxyGsBcbcdwFSNZzQYiYQ"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon icon={faYoutube} className="youtube-hover" />
          </a>
        </Grid>
        <Grid item className="icon-style">
          <a
            href="https://www.facebook.com/acotin96/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="facebook-hover"
            />
          </a>
        </Grid>
      </Grid>
    );
  }
}

export default SocialBar;
