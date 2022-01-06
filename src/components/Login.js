import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { login } from "../utils";

const Login = (props) => {
  const [name, setName] = useState("");

  const responseGoogle = (response) => {
    console.log("api respone", response);

    setName(response.profileObj.name);
  };
  const handleLogin = () => {
    login();
    props.history.push("/budget-list");
  };

  return (
    <div className="container">
      <h1>Google Login..!</h1>
      <h3> {name}</h3>
      <button className="btn" onClick={() => handleLogin()}>
        Click here to log in
      </button>
      <GoogleLogin
        clientId="467507836591-0j5vh5mkukmqmbr1g455vnrfgtenffur.apps.googleusercontent.com"
        button="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
export default Login;
