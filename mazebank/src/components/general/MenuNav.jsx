import { Link } from "react-router-dom";

function MenuNav() {
  return (
    <section id="menu">
      <a href="#menu">
        <img src="img/burger_menu.png" alt="Logo abrir menu" id="abrir" />
      </a>
      <a href="#">
        <img src="img/cerrar_menu.png" alt="Logo cerrar menu" id="cerrar" />
      </a>
      <nav id="contenedor-enlaces">
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
