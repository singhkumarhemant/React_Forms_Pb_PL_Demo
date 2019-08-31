import React, { Component } from "react";

/* Import Components */
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        email: "",
        empType: "",
        telephone: "",
        orgName:""
      },
      showMe: false,
      empTypeOptions: ["Salaried", "Self Emp"]
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
          telephone: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }
  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    if (value.toLowerCase() !== "salaried") {
      this.setState({
        showMe: false
      });
    } else {
      this.setState({
        showMe: true
      });
    }
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  render() {
    console.log(this.props, "i am in form1");
    const showMe = this.state.showMe;
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
          inputType={"email"}
          name={"email"}
          title={"Email"}
          value={this.state.newUser.email}
          placeholder={"Enter your Email"}
          handleChange={this.handleEmail}
        />
        <Input
          inputType={"text"}
          name={"telephone"}
          title={"telephone"}
          value={this.state.newUser.telephone}
          placeholder={"Enter your telephone"}
          handleChange={this.handlePhone}
        />
        <Select
          title={"Your Employment Type ?"}
          name={"empType"}
          options={this.state.empTypeOptions}
          value={this.state.newUser.empType}
          placeholder={"Select Emp Type"}
          handleChange={this.handleInput}
        />{" "}
        {!showMe ? (
          <div>
           <Input
          inputType={"text"}
          name={"selfemp"}
          title={"salary"}
          value={this.state.newUser.age}
          placeholder={"Your gross annual sales / turnover"}
         />
          <Input
            inputType={"text"}
            name={"orgName"}
            title={"orgName"}
            value={this.state.newUser.orgName}
            placeholder={"Your Organisation Name"}
          />
          </div>
        ) : (
          <Input
            inputType={"text"}
            name={"salary"}
            title={"salary"}
            value={this.state.newUser.age}
            placeholder={"Enter your salary"}
            handleChange={this.handleAge}
          />
        )}
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

export default FormContainer;
