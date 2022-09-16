import "./App.css";
import Nav from "./Components/LaPasiva/nav/Nav";
import Header from "./Components/LaPasiva/Header/Header.jsx";
import Menu from "./Components/LaPasiva/Menus/Menu.jsx";
import ModalIngeso from "./Components/LaPasiva/ModalIngreso/ModalIngeso.jsx";
import { useState } from "react";

function App() {
  const [modalEstaAbierto, setModalEstaAbierto] = useState(false);

  const onModalToggle = () => {
    setModalEstaAbierto(!modalEstaAbierto);
  };

  return (
    <div className="App">
      <Nav />
      <Header />
      <Menu />
      <ModalIngeso
        estaAbierto={modalEstaAbierto}
        funcionQueTogglea={onModalToggle}
      />
    </div>
  );
}

export default App;
