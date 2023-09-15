import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section id="cond">
        <ul>
          <li>
            <Link to="">Terminos y condiciones</Link>
          </li>
          <li>
            <Link to="">Privacidad</Link>
          </li>
          <li>© 2023, Maze Bank, S.A.</li>
        </ul>
      </section>
      <section id="logo">
        <figure>
          <img src="images/logo_banco.png" alt="Imagen del logo del banco" />
        </figure>
        <h1>Maze Bank</h1>
      </section>
      <section id="redes">
        <h4>Contactanos</h4>
        <ul>
          <li>
            <Link to="tel:+54936854423">
              <img src="images/whatsapp-icon.svg" alt="logo telefono" />
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/">
              <img src="images/facebook.svg" alt="logo facebook" />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/">
              <img src="images/twitter.svg" alt="logo twitter" />
            </Link>
          </li>
          <li>
            <Link to="mailto:mazebank@gmail.com">
              <img src="images/google-gmail.svg" alt="logo gmail" />
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
