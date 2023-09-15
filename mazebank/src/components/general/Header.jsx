import { Link } from "react-router-dom"
import React from "react";
import styles from "../../styles/Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.imagenTitulo}>
        <figure>
          <img src="images\logo_banco.png"  alt="Imagen del logo del banco" />
        </figure>
        <h1>Maze Bank</h1>
      </div>
      <Link to="/login" id="ancla"><button id="cerrar-sesion">Cerrar sesión</button></Link>
    </header>
  );
}

export default Header;