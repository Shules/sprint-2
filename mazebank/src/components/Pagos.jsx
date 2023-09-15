import Header from "./general/Header";
import Footer from "./general/Footer";
import MenuNav from "./general/MenuNav";
import Layout from "./general/Layout";
import styles from "../styles/Pagos.module.css";

function Pagos() {
  return (
    <>
      <Layout>
      <main>
        <section id={styles.cont}>
          <div id={styles.montoActual}>
            <p>Monto actual $AR: 9999,99</p>
            <p>Monto actual $US: 9,99</p>
            <p>Monto actual $EU: 8,99</p>
          </div>
          <div></div>
          <div className={styles.container}>
            <h2>PAGOS REALIZADOS</h2>
          </div>
          <section className={styles.info}></section>
          <div className={styles.container}>
            <h2>PAGOS PENDIENTES</h2>
          </div>
          <section className={styles.info}></section>
        </section>
      </main>
      </Layout>
    </>
  );
}

export default Pagos;
