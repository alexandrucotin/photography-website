import React from "react";
import Navbar from "./Navbar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Post from "./Post";

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
              <Post />
              <Post />
              <Post />
            </div>
            <Navbar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default BlogPage;
