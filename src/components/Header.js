import React from "react";
import Form from "./Form";
import Logo from "./Logo";


export default function Header ({getMovie}) {
  return (
    <section className="flex justify-center p-2 bg-black">
        <Logo/>
        <Form movieSearch={getMovie} />
        {/* <section className="flex">
          <p className="text-white">Sign In</p> 
          <p className="text-white">Log In</p>
        </section> */}
    </section>
  )
}