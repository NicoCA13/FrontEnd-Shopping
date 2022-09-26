import React from "react";
import Nav from "./nav/Nav";
import Header from "./Header/Header.jsx";
import Menu from "./Menus/Menu.jsx";
import Modalhorario from "./Modalhorario/Modalhorario.jsx";
import { useState } from "react";

export default function LaPasiva() {
  const [modalEstaAbierto, setModalEstaAbierto] = useState(false);

  const onModalToggle = () => {
    setModalEstaAbierto(!modalEstaAbierto);
  };
  return (
    <div>
      {" "}
      <Nav />
      <Header />
      <Menu />
      <Modalhorario
        estaAbierto={modalEstaAbierto}
        funcionQueTogglea={onModalToggle}
      />
    </div>
  );
}
