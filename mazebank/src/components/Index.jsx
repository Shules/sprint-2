import Header from "./general/Header";
import Footer from "./general/Footer";
import MenuNav from "./general/MenuNav";
import { Link } from 'react-router-dom';
import Layout from "./general/Layout";
import styles from "../styles/Index.module.css";

function Index() {
  return (
    <>
      <Layout>
      <main className="main-container">
        <h2>Quienes Somos</h2>
        <section id={styles.info}>
          <p>
            Somos <strong>Maze Bank</strong> un banco intenacional. Contamos con
            128 años antiguedad con clientes de todo el mundo. Te ofrecemos con
            nuestro <em>Home-Banking</em> una experiencia distinta a lo
            tradicional. Nuestra atencion se basa en la interacción virtual del
            cliente con su dinero para que puedas manejarlo desde cualquier lado
            del mundo, sin preocupaciones, con tan solo unos cliks
          </p>
          <p>
            Lema de <strong>Maze bank</strong>: <em>"Invertí desde tu casa"</em>{" "}
          </p>
        </section>
        <div className="divManejaTuCuenta card justify-content-center">
          <section id={styles.nave}>
            <h2 className="card-header">Maneja tu cuenta</h2>
            <ul className="card-body">
              <li className="botonManejaCuenta card-title">
                <Link to="/prestamos">Solicita Prestamos</Link>
              </li>
              <li className="botonManejaCuenta card-title">
                <Link to="/pagos">Ultimos Pagos</Link>
              </li>
              <li className="botonManejaCuenta card-title">
                <Link to="/transferencias">Mira tus tranferencias</Link>
              </li>
            </ul>
          </section>

          <section id={styles.formulario}>
            <form action="" method="post" className="formSolicitarTarjeta">
              <legend>Solicita tu tarjeta</legend>

              <label htmlFor="ape">
                Apellido:
                <input type="text" name="ape" id={styles.ape} required />
              </label>

              <label htmlFor="nom">
                Nombre:
                <input type="text" name="nom" id={styles.nom} required />
              </label>

              <button id={styles.sub} type="submit">
                Solicitar
              </button>
            </form>
          </section>
        </div>

        <section id={styles.contenido}>
          <article>
            <h2>Nuestra Sede</h2>
            <p>
              La sede de la empresa, Maze Bank Tower, está ubicada en Pillbox
              Hill, en el centro de Los Santos. Este rascacielos es el edificio
              más alto de San Andreas y de la costa oeste de los Estados Unidos
              de América. La compañía también patrocina el Maze Bank Arena en La
              Puerta, el estadio principal de la ciudad, y patrocina la película
              Meltdown de Richards Majestic Productions.
            </p>
            <p>
              Es un edificio extremadamente proyectado en la mayoría de
              películas hollywoodenses con temática en la ciudad de Los Santos.
            </p>

            <p>
              Este edificio está construido para soportar los frecuentes
              terremotos, pudiendo soportar uno de hasta 8 grados en la Escala
              de Richter. La torre es coronada por una corona de cristal que se
              ilumina de noche y a veces en celebraciones la corona se ilumina
              de varios colores.
            </p>
          </article>
        </section>
      </main>
      </Layout>
    </>
  );
}

export default Index;
