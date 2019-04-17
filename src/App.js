import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { Router } from "@reach/router";
import Me from "./Me";

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
          <Me path="/me" />
        </Router>
      </CSSTransition>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
