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
        <h1 className="titulo">Starbucks</h1>{" "}
      </aside>
      <article>
        <section>
          {" "}
          <h2>¡Es temporada de Pumpkin!</h2>
          <p>
            Por fin ha llegado el momento más deseado del año,{" "}
            <strong>
              nuestro icónico Pumpkin Spice Latte está de vuelta.{" "}
            </strong>
            Disfruta de intensos shots de espresso, tu leche favorita y una
            deliciosa variedad de especias que te harán saborear el otoño.
            Además, este año puedes probar el PSL en versión Cold Brew, nuestro
            café macerado durante 20 horas.
          </p>
          <button>Encuéntranos </button>
        </section>
        <section>
          <h2>
            <strong>¡Te lo llevamos!</strong>
          </h2>
          <h3>Disfruta tu experiencia Starbucks® donde quieras</h3>
        </section>
        <section></section>
        <section></section>
      </article>
      <footer></footer>
    </div>
  );
}
