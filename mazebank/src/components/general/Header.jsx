import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <figure>
        <img src="img/logo_banco.png" alt="Imagen del logo del banco" />
      </figure>
      <h1>Maze Bank</h1>
      <Link to="/login"><button id="cerrar-sesion">Cerrar sesión</button></Link>
    </header>
  );
}

export default Header;