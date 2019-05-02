import React from "react";
import Me from "./Me";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Home from "./Home";
import Grid2 from "./Grid2";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/me" component={Me} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/grid" component={Grid2} />
        </Switch>
      </div>
    );
  }
}
export default App;
