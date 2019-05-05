/* eslint-disable no-undef */
import React from "react";

class NavbarDots extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loading-dots">
        <p className={`dot ${this.props.dotNum}`}>.</p>
        <p className={`dot ${this.props.dotNum2}`}>.</p>
        <p className={`dot ${this.props.dotNum3}`}>.</p>
        <p className={`dot ${this.props.dotNum4}`}>.</p>
        <p className={`dot ${this.props.dotNum5}`}>.</p>
      </div>
    );
  }
}
export default NavbarDots;
