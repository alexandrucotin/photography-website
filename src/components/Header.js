import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Navbar />
      </div>
    );
  }
}

export default Header;
