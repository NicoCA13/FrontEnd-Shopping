import React from "react";
import "./Modalhorario.css";
import imagenSend from "../../../assets/send.png";

function ModalIngeso({ estaAbierto, funcionQueTogglea }) {
  let display;

  if (estaAbierto) {
    display = "block";
  } else {
    display = "none";
  }

  return (
    <div className="modal" style={{ display }}>
      <div className="modal-content">
        <span className="close" onClick={funcionQueTogglea}>
          x
        </span>
        <div className="Horarios-pasiva">
          <h1>Atencion al cliente</h1>
          <ul>
            <li>Lunes: 12:00 - 00:00</li>
            <li>Martes: 12:00 - 00:00</li>
            <li>Miércoles: 12:00 - 00:00</li>
            <li>Jueves: 12:00 - 00:00</li>
            <li>Viernes: 12:00 - 00:00</li>
            <li>Sabado: 12:00 - 00:00</li>
            <li>Domingo: 12:00 - 00:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModalIngeso;
