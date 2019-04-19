import React from "react";
import Me from "./Me";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
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
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/me" component={Me} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    );
  }
}
export default App;
