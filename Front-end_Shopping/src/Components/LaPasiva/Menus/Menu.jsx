import React from "react";
import "../Menus/Menu.css";

function Menu() {
  return (
    <div className="contenedorPadre">
      <div className="contenedorIzq">
        <ul>
          <li className="lista">
            <a href="#" className="listaMenu">
              Frankfurters
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Chivitos
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Ensaladas / Minutas
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Hamburguesas
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Pizzas
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Bebidas
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Postres
            </a>
          </li>
        </ul>
      </div>
      <div className="contenedorDer">
        <h1 className="tituloMenu">Nuestro Menú</h1>
      </div>
    </div>
  );
}

export default Menu;
