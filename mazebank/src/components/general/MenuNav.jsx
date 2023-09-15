import { Link } from "react-router-dom";
import styles from "../../styles/MenuNav.module.css";

function MenuNav() {
  return (
    <div>
      <section id={styles.menu}>
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
    </div>
  );
}

export default MenuNav;
