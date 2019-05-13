import React from "react";
import MePage from "./MePage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
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
          <Route path="/about-me" component={MePage} />
          <Route path="/portfolio/:category" component={ImagesPortfolio} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact-me" component={ContactPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
