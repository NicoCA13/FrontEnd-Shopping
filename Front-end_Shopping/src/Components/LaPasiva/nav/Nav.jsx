import React from "react";
import "./Nav.css";
import carrito from "../../../assets/carritocompra.png";
function Nav() {
  return (
    <div className="header-la-pasiva">
      <span className="span-zona-opinion">
        <p> ZONAS Y CONTANCTO</p>
        <p>DEJANOS TU OPINION</p>
      </span>
      <span className="span-ingresar-carrito">
        <p>INGRESAR</p>
        <span>
          <img width={20} src={carrito} alt="" />
        </span>
      </span>
    </div>
  );
}

export default Nav;
