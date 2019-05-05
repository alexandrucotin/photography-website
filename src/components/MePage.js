import React from "react";
import Navbar from "./Navbar";
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
            <Grid container className="div-title-me">
              <Grid
                item
                className="center-img"
                xs={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                style={{ padding: "1em" }}
              >
                <img src={image} alt="alex cotin" className="responsive-me" />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="center-text-me"
                style={{ padding: "1em" }}
              >
                <Grid container>
                  <Typography
                    style={{ color: "white", fontWeight: 300 }}
                    variant="h2"
                    gutterBottom
                  >
                    About me
                  </Typography>
                  <Typography
                    style={{
                      color: "white",
                      fontWeight: 300
                    }}
                    gutterBottom
                  >
                    Hi, My name is Alex, and I currently study Computer Science
                    at Verona, with a huge passion for photography, film making
                    and coding obviously. I ve practice 2 years in photography &
                    filmaking field doing video and photo shooting as for
                    writing code, I started when I was 16 years old. I ve lived
                    in Verona for the past 13 years and had time to discover the
                    most interesting places to see and the best places to eat
                    and drink. Even if you are not comfortable in front of the
                    camera there is no problem because I like to capture things
                    in the most natural way. I can speak fluently English,
                    Italian and Romanian. So communication shouldn t be a
                    problem. :)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Navbar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Me;
