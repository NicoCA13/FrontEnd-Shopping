import React from "react";
import "./Header.css";
import imagenpasiva from "../../../assets/1649261183.Mesa de trabajo – 1.png";

function Header() {
  return (
    <div className="Imagen-Pasiva">
      <div className="pequeñodiv">
        <img className="imagenpasivaimg" src={imagenpasiva} alt="" />
        <ul>
          <li className="listadelivery">Delivery abierto</li>
          <li className="listadelivery">Take away abierto</li>
        </ul>
        <a href="#" className="butHorarios">
          Ver Horarios
        </a>
      </div>
    </div>
  );
}

export default Header;
