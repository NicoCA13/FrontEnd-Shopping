import React from "react";
import "./Header.css";
import imagenpasiva from "../../../assets/1649261183.Mesa de trabajo – 1.png";
import { useState } from "react";
import ModalIngeso from "../Modalhorario/Modalhorario";

function Header() {
  const [modalEstaAbierto, setModalEstaAbierto] = useState(false);
  const openModal = () => {
    setModalEstaAbierto(!modalEstaAbierto);
  };
  return (
    <div className="Imagen-Pasiva">
      <div className="pequeñodiv">
        <img className="imagenpasivaimg" src={imagenpasiva} alt="" />
        <ul>
          <li className="listadelivery">Delivery abierto</li>
          <li className="listadelivery">Take away abierto</li>
        </ul>
        <a onClick={openModal} href="#" className="butHorarios">
          Ver Horarios
        </a>
      </div>
      <ModalIngeso
        estaAbierto={modalEstaAbierto}
        funcionQueTogglea={openModal}
      />
    </div>
  );
}

export default Header;
