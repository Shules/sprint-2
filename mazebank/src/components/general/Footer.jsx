import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.css";

function Footer() {
  return (
    <div id={styles.footer}>
      <section id={styles.cond}>
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
      <section id={styles.logo}>
        <h1>Maze Bank</h1>
        <figure>
          <img src="images/logo_banco.png" alt="Imagen del logo del banco" />
        </figure>
      </section>
      <section id={styles.redes}>
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
    </div>
  );
}

export default Footer;
