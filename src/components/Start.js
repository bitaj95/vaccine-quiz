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

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
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
