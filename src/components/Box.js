import React from "react";
import scaffale from "../static/scaffale.png";

class Box extends React.Component {
  render() {
    return (
      <div className="box box2">
        <img src={scaffale} alt="scaffale" className="responsive" />
      </div>
    );
  }
}

export default Box;
