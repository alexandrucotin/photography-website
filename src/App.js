import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { Router } from "@reach/router";
import Me from "./Me";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appearHome: true
    };
  }
  render() {
    const { appearHome } = this.state;
    return (
      <CSSTransition
        in={appearHome}
        appear={true}
        timeout={800}
        classNames="fade"
      >
        <Router>
          <Home path="/" />
          <Me path="/Me" />
          <Portfolio path="/Portfolio" />
          <Blog path="/Blog" />
        </Router>
      </CSSTransition>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
