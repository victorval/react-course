import React, { Component } from "react";
import Input from "./UserInput/UserInput";
import Output from "./UserOutput/UserOutput";

class Practice extends Component {
  state = {
    username: "Estefania",
  };

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {" "}
        <Input changed={this.usernameChangeHandler} username={this.state.username}/>
        <Output username={this.state.username} />
      </div>
    );
  }
}

export default Practice;
