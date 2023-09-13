function Transferencias() {
  return (
    <main>
      <aside>
        <section id="menu">
          <a href="#menu">
            <img src="img/burger_menu.png" alt="Logo abr/ir menu" id="abr/ir" />
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
                <a href="#">TRANSFERENCIAS</a>
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
      </aside>
      <br />
      <br />
      <form className="menu-transacciones">
        <div id="titulo">
          <h2>TRANSFERENCIAS</h2>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex at
          obcaecati nihil unde ratione maxime delectus laudantium
          necessitatibus, magni veniam? Ipsum nostrum iste culpa magnam nihil
          nemo magni blanditiis facilis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Doloremque rem rerum suscipit esse atque nihil
          maiores iste laudantium et, fugiat, repellat cupiditate earum
          reprehenderit velit. Nostrum voluptatem eaque dignissimos modi. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum
          quam sapiente autem itaque? Odit est, cum velit at, optio quis dolore
          id libero vitae quae, nulla nemo neque tempore?
        </div>
        <br />
        <div id="remitente">
          <ul className="prueba">
            <li>De BN $ 123456/5464/0</li>

            <li>Fecha de Ejecución 24/8/2023</li>

            <li>Plazo de Acreditación: En el acto</li>

            <li>
              Su saldo actual es de: $<a id="saldoActual">5000</a>
            </li>
          </ul>
        </div>
        <br />
        <div id="importes">
          <label className="prueba"> Importe en </label>
          <select name="" id="Importe" className="prueba2">
            <option value="-">-</option>
            <option value="Pesos">Pesos</option>
            <option value="Dolares">Dolares</option>
            <option value="Euro">Euros</option>
          </select>
        </div>
        <br />
        <br />
        <div id="montoIngresar">
          <label className="prueba">Monto a ingresar </label> <br />
          <input type="number" name="monto" id="monto" className="prueba2" />
        </div>
        <br />
        <br />
        <div id="receptor">
          <label className="prueba">Para </label>
          <input type="text" className="prueba2" />
        </div>
        <br />
        <br />

        <div id="metodo">
          <label className="prueba">Concepto</label>
          <select name="" className="prueba2">
            <option value="-">-</option>
            <option value="Cuota">Cuota</option>
            <option value="Factura">Factura</option>
            <option value="Inmobiliarias">Inmobiliarias</option>
            <option value="Prestamo">Préstamo</option>
            <option value="Seguro">Seguro</option>
            <option value="Varios">Varios</option>
          </select>
        </div>
        <br />
        <br />
        <div id="botonContinuar">
          <button type="button" id="continuar" onClick={''}>
            Continuar
          </button>
        </div>
      </form>
    </main>
  );
}

export default Transferencias;
