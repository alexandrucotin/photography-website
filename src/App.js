import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./NavbarCustom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1> CIAOOOO</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
