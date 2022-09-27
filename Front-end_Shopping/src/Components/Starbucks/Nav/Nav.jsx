import React from "react";
import "./Nav.css";
import starbuks from "../../../assets/starbucks.png";
import mapa from "../../../assets/mapa.png";

export default function nav() {
  return (
    <div>
      <nav>
        <div className="contenedor-nav">
          <div className="icono-starbucks">
            <img src={starbuks} alt={starbuks} />
          </div>
          <div className="nav-items">
            <ul className="ul-nav">
              <li>CARTA</li>
              <li>CAFÉ</li>
              <li>DELIVERY</li>
              <li>RESPONSABILIDADES</li>
              <li>MERCHANDISING</li>
            </ul>
          </div>
        </div>
        <div className="encuentranos">
          <img src={mapa} alt={mapa} />
          <h4>Encuéntranos</h4>
        </div>
      </nav>
    </div>
  );
}
