import Header from "./general/Header";
import Footer from "./general/Footer";
import MenuNav from "./general/MenuNav";
import styles from "../styles/Pagos.module.css";

function Pagos() {
  return (
    <>
      <Header />
      <MenuNav />
      <main>
        <section id="cont">
          <div id="montoActual">
            <p>Monto actual $AR: 9999,99</p>
            <p>Monto actual $US: 9,99</p>
            <p>Monto actual $EU: 8,99</p>
          </div>
          <div></div>
          <div className="container">
            <h2>PAGOS REALIZADOS</h2>
          </div>
          <section className="info"></section>
          <div className="container">
            <h2>PAGOS PENDIENTES</h2>
          </div>
          <section className="info"></section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Pagos;
