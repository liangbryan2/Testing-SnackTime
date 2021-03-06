import Login from "./WelcomePage/components/Login/Login";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class notAuthorized extends Component {
  componentDidMount() {
    console.log("autho props", this.props);
    console.log(this.props);
  }
  render() {
    if (!this.props.location.state) {
      return (
        <div>
          <h1>Oops</h1>
          <p>Something went wrong... Please try logging in again</p>
          <Link to="/">Click here to go home</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Oops</h1>
          <p>Something went wrong... Please try logging in again </p>
          <h2>{this.props.location.state.type} Login</h2>
          <Login
            oldLocation={this.props.location.state.location}
            type={this.props.location.state.type}
          />
        </div>
      );
    }
  }
}

export default notAuthorized;
