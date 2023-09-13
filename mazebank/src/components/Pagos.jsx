function Pagos() {
  return (
    <main>
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
              <a href="index.html">INICIO</a>
            </li>
            <li className="cuentas">
              <a href="cuentas.html">CUENTAS</a>
            </li>
            <li className="transf">
              <a href="transferencias.html">TRANSFERENCIAS</a>
            </li>
            <li className="pagos">
              <a href="pagos.html">PAGOS</a>
            </li>
            <li className="prestamos">
              <a href="prestamos.html">PRESTAMOS</a>
            </li>
          </ul>
        </nav>
      </section>
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
  );
}

export default Pagos;
