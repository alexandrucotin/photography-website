import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ImagesPortfolio extends React.Component {
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
    const { category } = this.props.location.state;
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
          <div className={category}>
            <Carousel />
            <Navbar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default ImagesPortfolio;
