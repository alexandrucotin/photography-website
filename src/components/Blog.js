import React from "react";
import BottomAppBar from "./AppBar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Icon from "@material-ui/core/Icon";

class Blog extends React.Component {
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
          <div className="blog">
            <div className="div-title-blog">
              <h1 className="title-blog">This my Blog!</h1>
              <Icon
                style={{
                  color: "white",
                  fontSize: "3em"
                }}
              >
                keyboard_arrow_down
              </Icon>
            </div>
            <BottomAppBar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Blog;
