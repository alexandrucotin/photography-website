import React from "react";
import BottomAppBar from "./AppBar";
import GridPort2 from "./Grid2";
import SearchBar from "./SearchBar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Icon from "@material-ui/core/Icon";

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
            <div className="div-title-portfolio">
              <h1 className="title-portfolio">This my Portfolio!</h1>
              <Icon
                style={{
                  color: "white",
                  fontSize: "3em"
                }}
              >
                keyboard_arrow_down
              </Icon>
            </div>
            <SearchBar />
            <GridPort2 />
            <BottomAppBar />
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Portfolio;
