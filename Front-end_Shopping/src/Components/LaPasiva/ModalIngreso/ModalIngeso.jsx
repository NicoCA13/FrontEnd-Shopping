import React from "react";
import "./ModalIngreso.css";
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
        <span class="close" onClick={funcionQueTogglea}>
          x
        </span>
        <img className="imagenSend" src={imagenSend} alt="" />
      </div>
    </div>
  );
}

export default ModalIngeso;
