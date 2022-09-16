import React, { useState } from "react";
import "./Nav.css";
import carrito from "../../../assets/carritocompra.png";
import ModalIngeso from "../Modalhorario/Modalhorario";

function Nav() {
  const [modalEstaAbierto, setModalEstaAbierto] = useState(false);
  const openModal = () => {
    setModalEstaAbierto(!modalEstaAbierto);
  };

  return (
    <div className="header-la-pasiva">
      <span className="span-zona-opinion">
        <p>
          <a href="#" className="titulosNav">
            ZONAS Y CONTACTOS
          </a>
        </p>
        <p className="titulosNav">
          <a href="#" className="titulosNav">
            DEJANOS TU OPINION
          </a>
        </p>
      </span>
      <span className="span-ingresar-carrito">
        <p className="titulosNav">
          <a href="#" className="titulosNav" onClick={openModal}>
            INGRESAR
          </a>
        </p>
        <span>
          <a href="#">
            <img width={20} src={carrito} alt="" />
          </a>
        </span>
      </span>
      <ModalIngeso
        estaAbierto={modalEstaAbierto}
        funcionQueTogglea={openModal}
      />
    </div>
  );
}

export default Nav;
