import React from "react";
import "./Nav.css";
import Telephone from "../../../assets/telephone.png";
import Message from "../../../assets/message.png";
import Location from "../../../assets/location.png";

export default function Nav() {
  return (
    <nav className="shoppingNav">
      <h1 className="logoShopping">SHOPPING</h1>
      <div className="contenedorIconosNav">
        <img className="iconsNav" src={Telephone} alt="telephone" />
        <img className="iconsNav" src={Message} alt="send-message" />
        <img className="iconsNav" src={Location} alt="location" />
      </div>
    </nav>
  );
}
