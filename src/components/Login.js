import React from "react";
import FacebookLogin from "react-facebook-login";
import * as axios from "axios";
function Login() {
  async function authenticate(access_token) {
    const authResponse = await axios.get(
      "http://localhost:3333/facebook-login/facebook/redirect",
      {
        params: { access_token }
      }
    );
  }
  const responseFacebook = async response => {
    authenticate(response.accessToken);
  };

  return (
    <FacebookLogin
      appId="368540588635994"
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}

export default Login;
