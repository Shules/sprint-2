import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section id="cond">
        <ul>
          <li>
            <a href="">Terminos y condiciones</a>
          </li>
          <li>
            <a href="">Privacidad</a>
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
            <a href="tel:+54936854423">
              <img src="images/whatsapp-icon.svg" alt="logo telefono" />
            </a>
          </li>
          <li>
            <Link href="https://www.facebook.com/">
              <img src="images/facebook.svg" alt="logo facebook" />
            </Link>
          </li>
          <li>
            <a href="https://twitter.com/">
              <img src="images/twitter.svg" alt="logo twitter" />
            </a>
          </li>
          <li>
            <a href="mailto:mazebank@gmail.com">
              <img src="images/google-gmail.svg" alt="logo gmail" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
