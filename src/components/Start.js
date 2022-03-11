import React, { Component } from "react";
import Age from "./Age";
import Gender from "./Gender";
import Meningitis from "./Meningitis";
import WorkCondition from "./WorkCondition";

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
    const { step } = this.state;

    const { gender, age, meningitis, workCondition } = this.state;
    const values = { gender, age, meningitis, workCondition };

    switch (step) {
      case 1:
        return (
          <Age
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Gender
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Meningitis
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <WorkCondition
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
      // do nothing
    }
  }
}
