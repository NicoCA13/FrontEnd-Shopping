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
              Húngaras
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Chivitos (Lomo o Pollo)
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Carnes
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Pollo de granja
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Milanesas (Carne o Pollo)
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Hamburguesas caseras
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Pastas
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Vegetariano
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Pescado
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              CERDO
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Pizzería
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Pizzetas
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              Postres
            </a>
          </li>
          <li className="lista">
            <a href="#" className="listaMenu">
              BEBIDAS
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
