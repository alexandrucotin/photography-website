import React from "react";
import Navbar from "./Navbar";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="title">Title</h1>
      </div>
    );
  }
}

export default Header;
