import React from "react";
import MePage from "./MePage";
import PortfolioPage from "./PortfolioPage";
import BlogPage from "./BlogPage";
import HomePage from "./HomePage";
import ImagesPortfolio from "./ImagesPortfolio";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/me" component={MePage} />
          <Route path="/portfolio/:category" component={ImagesPortfolio} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
