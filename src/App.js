import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Me from "./Me";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Home from "./Home";
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
            <Route exact path="/" component={Home} />
            <Route path="/me" component={Me} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
          </Router>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
