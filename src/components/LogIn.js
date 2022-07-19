import React from "react";
import "./login.css";
class Login extends React.Component {
  // using class component
  constructor() {
    super();
    this.state = {
      username: "", // initially value is null
      password: "",
    };
    this.Submit = this.Submit.bind(this); // binding the submit function with the state
  }
  usernamehandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  }; // setting the state value by the target value
  passwordhandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  Submit = (e) => {
    alert(`${this.state.username} Login Succesfully...`);
    console.warn(this.state);
    this.setState({
      username: "",
      password: "", // after login setting the state value again to null
    });
    e.preventDefault();
  };
  render() {
    return (
      <div className="signin">
        <div className="inf">
          {" "}
          <h2 className="log">Hello!!!</h2>
          <br></br>{" "}
        </div>{" "}
        <br></br>
        <form onSubmit={this.Submit}>
          <input
          className="log"
            type="text"
            placeholder="username..."
            required="true"
            value={this.state.username}
            onChange={this.usernamehandler}
          ></input>
          <br></br>
          <br></br>
          <input
          className="log"
            type="password"
            placeholder="password..."
            required="true"
            value={this.state.password}
            onChange={this.passwordhandler}
          ></input>
          <br></br>
          <br></br>
          <br></br>
          <button>SignIn</button>
        </form>
      </div>
    );
  }
}
export default Login; // eporting the component
