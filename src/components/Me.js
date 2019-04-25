import React from "react";
import BottomAppBar from "./AppBar";
import Grid from "@material-ui/core/Grid";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
            <Grid container className="center-div">
              <Grid item>
                <h1 style={{ color: "white", align: "right" }}>
                  This is an ABOUT ME page
                </h1>
              </Grid>
              <Grid item>
                <h1 style={{ color: "white", align: "right" }}>
                  This is an ABOUT ME page
                </h1>
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
