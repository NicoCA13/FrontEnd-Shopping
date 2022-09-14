import React from "react";
import "./Header.css";
import imagenpasiva from "../../../assets/1649261183.Mesa de trabajo – 1.png";

function Header() {
  return (
    <div className="Imagen-Pasiva">
      <div className="pequeñodiv">
        <img className="imagenpasivaimg" src={imagenpasiva} alt="" />
        <ol>
          <li>Delivery abierto</li>
          <li>Take away abierto</li>
        </ol>
        <button>Ver Horarios</button>
      </div>
    </div>
  );
}

export default Header;
