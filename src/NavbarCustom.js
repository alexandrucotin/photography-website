import React from "react";
import Navbar from "react-bulma-components/lib/components/navbar";

class NavbarCustom extends React.Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarCustom;
