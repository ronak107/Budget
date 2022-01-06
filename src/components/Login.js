import React, { useState } from "react";
import GoogleLogin from "react-google-login";

const Login = () => {
  const [name, setName] = useState("");

  const responseGoogle = (response) => {
    console.log("api respone", response);

    setName(response.profileObj.name);
  };

  return (
    <div className="container">
      <h1>Google Login..!</h1>
      <h3> {name}</h3>

      <GoogleLogin
        clientId="467507836591-0j5vh5mkukmqmbr1g455vnrfgtenffur.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
export default Login;
