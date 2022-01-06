import React, { Component } from "react";
import { logout, isLogin } from "../utils";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: isLogin(),
    };
  }

  handleLogout = () => {
    logout();
    this.setState({
      isLogin: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Google Login React</h1>

        {this.state.isLogin ? (
          <button className="btn" onClick={() => this.handleLogout()}>
            Click here to log out
          </button>
        ) : (
          <Link to="/login" className="btn">
            Go to Log in page
          </Link>
        )}
      </div>
    );
  }
}

export default Home;
