/* eslint-disable no-undef */
import React from "react";

class BEDots extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loading-dots">
        <p className={`dot ${this.props.dotNum}`}> . </p>
        <p className={`dot ${this.props.dotNum2}`}>.</p>
      </div>
    );
  }
}
export default BEDots;
