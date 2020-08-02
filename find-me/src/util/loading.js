import React, { Component } from "react";
import './../assets/css/Style.css';

class Loading extends Component {

  constructor() {
    super();

    this.state = {
      content: "none"
    };
  }

  render() {
    const content = (this.props.isLoading ? "block" : "none");

    return (
      <div className="vertical-centered-box" style={{ display: content }}>
        <div className="load-content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;