import React from "react";
import BottomAppBar from "./AppBar";
import Title from "./Title";
import Grid from "@material-ui/core/Grid";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Home extends React.Component {
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
          <div className="home">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className="full"
            >
              <Grid item>
                <BottomAppBar />
              </Grid>
              <Grid item>
                <Title />
              </Grid>
            </Grid>
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
