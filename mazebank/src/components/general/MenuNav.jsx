import { Link } from "react-router-dom";
import styles from "../../styles/MenuNav.module.css";

function MenuNav() {
  return (
    <section id={styles.menu}>
      <a href="#menu">
        <img src="images/burger_menu.png" alt="Logo abrir menu" id="abrir" />
      </a>
      <a href="#">
        <img src="images/cerrar_menu.png" alt="Logo cerrar menu" id="cerrar" />
      </a>
      <nav id={styles.contenedorEnlaces}>
        <ul>
          <li className="inicio">
            <Link to="/">INICIO</Link>
          </li>
          <li className="cuentas">
            <Link to="/cuentas">CUENTAS</Link>
          </li>
          <li className="transf">
            <Link to="/transferencias">TRANSFERENCIAS</Link>
          </li>
          <li className="pagos">
            <Link to="/pagos">PAGOS</Link>
          </li>
          <li className="prestamos">
            <Link to="/prestamos">PRESTAMOS</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MenuNav;
