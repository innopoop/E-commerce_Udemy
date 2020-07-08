import React from "react";

import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-page.styles.scss";

const SignInPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInPage;
