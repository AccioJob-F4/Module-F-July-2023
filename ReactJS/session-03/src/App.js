"use strict";

import React, { Component } from "react";
import ToBeUnmounted from "./ToBeUnmounted";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      unmounted: false,
    };

    console.log("CONSTRUCTOR");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate : ",
      { nextProps, nextState },
      "this.state : ",
      this.state
    );
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate : ",
      { prevProps, prevState },
      "this.state : ",
      this.state
    );
  }

  render() {
    console.log("Render");

    return (
      <div>
        <h1> Counter : {this.state.count}</h1>

        <button
          onClick={() => {
            this.setState({ ...this.state, count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ ...this.state, count: this.state.count - 1 });
          }}
        >
          -
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ ...this.state, unmounted: !this.state.unmounted });
          }}
        >
          Unmount/Mount
        </button>
        {!this.state.unmounted && <ToBeUnmounted />}
      </div>
    );
  }
}
