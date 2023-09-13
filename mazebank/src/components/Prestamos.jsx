function Prestamos() {
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
                <a href="transferencias.html">TRANSFERENCIAS</a>
              </li>
              <li className="pagos">
                <a href="pagos.html">PAGOS</a>
              </li>
              <li className="prestamos">
                <a href="#">PRESTAMOS</a>
              </li>
            </ul>
          </nav>
        </section>
      </aside>

      <section id="cuerpo">
        <div>
          <h2 id="tituloPrestamo">Nuevo préstamo</h2>
          <div id="titulo">
            <h3>Selecciona tu tipo de préstamo:</h3>

            <div className="prestamo-menu">
              <label for="prestamo">
                <br />
                <h2>
                  Personal
                  <input
                    id="Personal"
                    type="radio"
                    name="prestamo"
                    value="Personal"
                  />
                </h2>
                <br />
                <h2>
                  Emprendimiento
                  <input
                    id="Emprendimiento"
                    type="radio"
                    name="prestamo"
                    value="Emprendimiento"
                  />
                </h2>
                <br />
                <h2>
                  Capital de trabajo
                  <input
                    id="Capital"
                    type="radio"
                    name="prestamo"
                    value="Capital"
                  />
                </h2>
              </label>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                recusandae itaque laboriosam possimus nulla architecto laborum,
                ut temporibus nemo maxime doloribus animi molestias voluptatum
                aperiam, id officiis, commodi minus. Aliquid.
              </p>
              <br />
              <h3>
                <button id="cancelar" type="button" onClick={cancelacion()}>
                  Cancelar
                </button>
                <button id="confirmar" type="button" onClick={mostrarAviso()}>
                  Continuar
                </button>
              </h3>
              <p id="confirmacion"></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Prestamos;
