import React from "react";
import Navbar from "./Navbar";

class Header extends React.Component {
  render() {
    return (
      <div className="header-section">
        <Navbar />
        <h1>Title</h1>
      </div>
    );
  }
}

export default Header;
