import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body-section">
          <p> CIAOOOO</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
