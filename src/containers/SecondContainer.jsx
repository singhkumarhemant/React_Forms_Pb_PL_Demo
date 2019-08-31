/* Import Dependencies */
import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

/* Declare Class */
class SecondContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        email: "",
        address: ""
      }
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handlePhone(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          address: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  render() {
    console.log(this.state);
    return (
      <form className="header">
        <Input
          inputType={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleFullName}
        />
        <Input
          inputType={"text"}
          name={"email"}
          title={"Email"}
          value={this.state.newUser.email}
          placeholder={"Enter your Email"}
          handleChange={this.handleEmail}
        />

        <Input
          inputType={"text"}
          name={"address"}
          title={"address"}
          value={this.state.newUser.address}
          placeholder={"Enter your address"}
          handleChange={this.handlePhone}
        />
        <Button
          action={this.props.updateForm}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default SecondContainer;
