import React, { Component } from "react";
import FormContainer from "./FormContainer";
import SecondContainer from "./SecondContainer";
import { render } from "react-dom";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };
    this.updateForm = this.updateForm.bind(this);
  }

  updateForm() {
    if (this.state.showForm) {
      this.setState({
        showForm: false
      });
    }
    this.setState({
      showForm: true
    });
  }

  render() {
    console.log(this.state, "i am hero state");
    const showForm = this.state.showForm;
    return (
      <div>
        {!showForm ? (
          <div>
            <h1>Form 1</h1>
            <FormContainer updateForm={this.updateForm} />
          </div>
        ) : (
          <div>
            <h1>Form 2</h1>
            <SecondContainer updateForm={this.updateForm} />
          </div>
        )}
      </div>
    );
  }
}

export default Hero;
