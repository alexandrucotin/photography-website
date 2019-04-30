import React from "react";
import BottomAppBar from "./AppBar";
import Grid from "@material-ui/core/Grid";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import image from "../static/me.jpg";
import SocialBar from "./SocialBar";
import { Typography } from "@material-ui/core";

class Me extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };

    this.closeComponent = ev => {
      ev.preventDefault();

      this.setState({
        isVisible: false
      });

      setTimeout(() => {
        this.props.history.push("/");
      }, 600);
    };
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={
          this.props.match.params === "/login"
            ? "loadComponent"
            : "leaveComponent"
        }
      >
        {this.state.isVisible ? (
          <div className="me">
            <SocialBar />
            <Grid container className="center-div div-title-me">
              <Grid item xs={12} sm={12} lg={3} xl={3}>
                <img
                  src={image}
                  alt="alex cotin"
                  className="responsive-me round"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={3} xl={3}>
                <Typography component="h2" variant="h1" gutterBottom>
                  About me
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Hi, My name is Alex, and I currently study Computer Science at
                  Verona, with a huge passion for photography, film making and
                  coding obviously. I've practice 2 years in photography &
                  filmaking field doing video and photo shooting as for writing
                  code, I started when I was 16 years old. I've lived in Verona
                  for the past 13 years and had time to discover the most
                  interesting places to see and the best places to eat and
                  drink. Even if you are not comfortable in front of the camera
                  there is no problem because I like to capture things in the
                  most natural way. I can speak fluently English, Italian and
                  Romanian. So communication shouldn't be a problem. :)
                </Typography>
              </Grid>
            </Grid>
            <BottomAppBar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Me;
