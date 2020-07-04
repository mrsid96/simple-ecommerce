import React from "react";
import "./authentication.style.scss";

import SignIn from "./../../components/signin/signin.component";
import SignUp from "./../../components/signup/signup.component";

export const Authentication = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);
