import React from "react";
import "../Header/Header.css";
import banner from "../../../assets/banner-cafe.png";
import icono from "../../../assets/starbucks.png";

export default function Header() {
  return (
    <div className="contenedor-principal-header">
      <header>
        <img src={banner} alt={banner} />
      </header>
      <aside>
        <img src={icono} alt={icono} />
        <h1>Starbucks</h1>{" "}
      </aside>
      <article>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </article>
      <footer></footer>
    </div>
  );
}
