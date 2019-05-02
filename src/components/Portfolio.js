import React from "react";
import BottomAppBar from "./AppBar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Category from "./Categories";
import Grid from "@material-ui/core/Grid";

class Portfolio extends React.Component {
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
          <div className="portfolio">
            <Category />
            <BottomAppBar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Portfolio;
