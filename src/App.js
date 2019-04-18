import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { Router } from "@reach/router";
import Me from "./Me";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAuV5-48NTyoy1rQsgMLasyewqkzxXCFhI",
  authDomain: "mysite-454d0.firebaseapp.com",
  databaseURL: "https://mysite-454d0.firebaseio.com",
  projectId: "mysite-454d0",
  storageBucket: "mysite-454d0.appspot.com",
  messagingSenderId: "1019197266630"
};

firebase.initializeApp(config);

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
      <TransitionGroup>
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
      </TransitionGroup>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
