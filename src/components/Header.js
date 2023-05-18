import React from "react";
import Form from "./Form";
import Logo from "./Logo";


export default function Header ({getMovie}) {
  return (
    <section className=" bg-black">
      <Logo/>
      <Form movieSearch={getMovie} />
      <section className="">
        <p className="text-white">Sign In</p>
        <p className="text-white">Log In</p>
      </section>
    </section>
  )
}