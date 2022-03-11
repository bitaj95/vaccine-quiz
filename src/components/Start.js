import React, { Component } from "react";

export default class Start extends Component {
  state = {
    step: 1,
    gender: "",
    age: "",
    meningitis: false,
    workCondition: false,
    publicSafety: false,
  };

  render() {
    return (
      <div>
        Welcome to the vaccine quiz Welcome to the vaccine quiz Welcome to the
        vaccine quiz Welcome to the vaccine quiz
      </div>
    );
  }
}
