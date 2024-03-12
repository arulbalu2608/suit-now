import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import shoppingBag from "@/public/shopping-bag.svg";
import Button from "../Button";

const Navbar = () => {
  return (
    <section className="row container mx-auto py-3">
      <div className="col-4">
        <Image src={logo} alt="logo" />
      </div>

      <div className="col-4">
        <div className="d-flex justify-content-between">
          <p>Home</p>
          <p>Trending</p>
          <p>Category</p>
          <p>About us</p>
        </div>
      </div>

      <div className="col-4">
        <div className="d-flex justify-content-evenly">
          <Image src={shoppingBag} alt="shoppingBag" />
          <Button className="secondary" label="login" />
          <Button className="primary" label="Sign up" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
