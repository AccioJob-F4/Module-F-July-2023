import React, { Component } from "react";

export default class ToBeUnmounted extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return <div>ToBeUnmounted</div>;
  }
}
