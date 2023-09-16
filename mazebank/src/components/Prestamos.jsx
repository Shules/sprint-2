import Layout from "./general/Layout";
import styles from "../styles/Prestamos.module.css";
import { useEffect, useState } from "react";

function Prestamos() {
  const [prestamo, setPrestamo] = useState(false);
  const [tipoPrestamo, setTipoPrestamo] = useState(null);


  useEffect(()=>{
    setPrestamo(false)
  },[tipoPrestamo])

  function mostrarAviso() {
     
    setPrestamo(window.confirm("Esta seguro que desea realizar el prestamo?"))
    
  }

  function cancelacion() {
    setPrestamo(false)
    setTipoPrestamo(null)
  }

  return (
    <>
      <Layout>
      <div>
        <section id={styles.cuerpo}>
          <div>
            <h2 id={styles.tituloPrestamo}>Nuevo préstamo</h2>
            <div id={styles.titulo}>
              <h3>Selecciona tu tipo de préstamo:</h3>

              <div className={styles.prestamoMenu}>
                <label for={styles.prestamo}>
                  <br />
                  <h2>
                    Personal
                    <input
                      id={styles.Personal}
                      type="radio"
                      name="prestamo"
                      value="Personal"
                      onClick={(e)=>setTipoPrestamo(e.target.value)}
                    />
                  </h2>
                  <br />
                  <h2>
                    Emprendimiento
                    <input
                      id={styles.Emprendimiento}
                      type="radio"
                      name="prestamo"
                      value="Emprendimiento"
                      onClick={(e)=>setTipoPrestamo(e.target.value)}
                    />
                  </h2>
                  <br />
                  <h2>
                    Capital de trabajo
                    <input
                      id={styles.Capital}
                      type="radio"
                      name="prestamo"
                      value="Capital"
                      onClick={(e)=>setTipoPrestamo(e.target.value)}
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
                  <button id={""} type="button" onClick={cancelacion}>
                    Cancelar
                  </button>
                  <button id={""} type="button" onClick={mostrarAviso}>
                    Continuar
                  </button>
                </h3>
                <p id={styles.confirmacion}></p>
              </div>
              {prestamo ? 
              <h2>se realizo un prestamo del tipo: {tipoPrestamo}</h2> :
              <h2>Todavía no se realizo el prestamo</h2>}
            </div>
          </div>
        </section>
      </div>
      </Layout>
    </>
  );
}

export default Prestamos;
