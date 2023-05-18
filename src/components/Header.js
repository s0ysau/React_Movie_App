import React from "react";
import Form from "./Form";


export default function Header ({getMovie}) {
  return (
    <React.Fragment>
      <Form movieSearch={getMovie} />
      <p>Sign In</p>
      <p>Log In</p>
    </React.Fragment>
  )
}