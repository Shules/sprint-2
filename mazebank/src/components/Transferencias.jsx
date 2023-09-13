import Header from "./general/Header";
import Footer from "./general/Footer";
import MenuNav from "./general/MenuNav";
import { Link } from 'react-router-dom';

function Transferencias() {
  function mostrarSaldoActual(saldoActual) {
    let saldoMostrar = document.getElementById("saldoActual");
    saldoMostrar.textContent = saldoActual;
  }

  function convertirMoneda(monto, moneda) {
    if (moneda == "Dolares") {
      return monto * 700;
    }

    if (moneda == "Euro") {
      return monto * 500;
    }
  }

  function mostrarAviso() {
    let botonContinuar = document.getElementById("continuar");
    let confirmacion = window.confirm("¿Seguro que desea continuar?");
    let saldoActual = parseFloat(
      document.getElementById("saldoActual").textContent
    );
    let monto = parseFloat(document.getElementById("monto").value);
    let moneda = document.getElementById("Importe").value;

    if (moneda != "Pesos") {
      monto = convertirMoneda(monto, moneda);
    }

    if (confirmacion && saldoActual >= monto && monto > 0) {
      saldoActual -= monto;
      mostrarSaldoActual(saldoActual);
      alert("¡Transferencia exitosa! Tu saldo actual es de $" + saldoActual);
    } else if (saldoActual < monto) {
      alert("No dispone del dinero solicitado");
    } else if (monto <= 0) {
      alert("Monto no valido.");
    } else {
      alert("Transferencia cancelada.");
    }
  }

  return (
    <>
      <Header />
      <MenuNav />
      <main>
        <form className="menu-transacciones">
          <div id="titulo">
            <h2>TRANSFERENCIAS</h2>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex at
            obcaecati nihil unde ratione maxime delectus laudantium
            necessitatibus, magni veniam? Ipsum nostrum iste culpa magnam nihil
            nemo magni blanditiis facilis. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Doloremque rem rerum suscipit esse
            atque nihil maiores iste laudantium et, fugiat, repellat cupiditate
            earum reprehenderit velit. Nostrum voluptatem eaque dignissimos
            modi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum laborum quam sapiente autem itaque? Odit est, cum velit at,
            optio quis dolore id libero vitae quae, nulla nemo neque tempore?
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
            <button type="button" id="continuar" onClick={mostrarAviso}>
              Continuar
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Transferencias;
