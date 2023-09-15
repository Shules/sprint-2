import Header from "./general/Header";
import Footer from "./general/Footer";
import MenuNav from "./general/MenuNav";
import styles from "../styles/Prestamos.module.css";

function Prestamos() {
  function mostrarAviso() {
    var confirma = window.confirm(
      "Esta seguro que desea realizar el prestamo?"
    );
    var Personal = document.getElementById("Personal");
    var Emprendimiento = document.getElementById("Emprendimiento");
    var Capital = document.getElementById("Capital");
    var contenido = document.getElementsByClassName("prestamo-menu");
    var confirmacion = document.getElementById("confirmacion");

    if (confirma) {
      if (Personal.checked) {
        confirmacion.textContent =
          "Se ha realizado un prestamo personal con exito!";
      } else if (Emprendimiento.checked) {
        confirmacion.textContent =
          "Se ha realizado un prestamo de emprendimiento con exito!";
      } else if (Capital.checked) {
        confirmacion.textContent =
          "Se ha realizado un prestamo de capital con exito!";
      } else {
        confirmacion.textContent = "seleccione una opcion por favor!";
      }
    }
  }

  function cancelacion() {
    var Personal = document.getElementById("Personal");
    var Emprendimiento = document.getElementById("Emprendimiento");
    var Capital = document.getElementById("Capital");
    var confirmacion = document.getElementById("confirmacion");

    Personal.checked = false;
    Emprendimiento.checked = false;
    Capital.checked = false;
    confirmacion.textContent = "";
  }

  return (
    <>
      <Header />
      <MenuNav />
      <main>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores recusandae itaque laboriosam possimus nulla architecto
                  laborum, ut temporibus nemo maxime doloribus animi molestias
                  voluptatum aperiam, id officiis, commodi minus. Aliquid.
                </p>
                <br />
                <h3>
                  <button id="cancelar" type="button" onClick={cancelacion}>
                    Cancelar
                  </button>
                  <button id="confirmar" type="button" onClick={mostrarAviso}>
                    Continuar
                  </button>
                </h3>
                <p id="confirmacion"></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Prestamos;
