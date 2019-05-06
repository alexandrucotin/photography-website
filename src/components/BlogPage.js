import React from "react";
import Navbar from "./Navbar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class BlogPage extends React.Component {
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
              <p className="no-post">NO POST YET!</p>
            </div>
            <Navbar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default BlogPage;
