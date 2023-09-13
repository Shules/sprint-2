import Header from "./general/Header";
import Footer from "./general/Footer";
import MenuNav from "./general/MenuNav";
import { Link } from 'react-router-dom';

function Cuentas() {
  var verAlias1 = () => {
    alert("Su Alias es: arbol.caja.grillo\nSu CBU/CVU es: 000054218158461051");
  };

  var verAlias2 = () => {
    alert("Su Alias es: madera.sifon.tormenta\nSu CBU/CVU es: 000026198168457081");
  };

  var verAliasUSD = () => {
    alert("Su Alias es: risa.amarillo.capa\nSu CBU/CVU es: 000054810625489210");
  };

  return (
    <>
      <Header />
      <MenuNav />
      <main>
        <section id="cuentas-container">
          <div className="cuenta-1">
            <h1>BN $ 123456/5464/0</h1>

            <p>$0</p>
            <p>Limite de extracción $100.000</p>

            <button onClick={verAlias1}>Ver Alias/CBU/CVU</button>

            <br />
            <button className="movimientos" /*onClick*/>Ver movimientos</button>
            <select name="" id="">
              <option id="op1" value="">
                Del día
              </option>
              <option value="">Últimos 3 dias</option>
              <option value="">Últimos 7 dias</option>
              <option value="">Último mes</option>
            </select>
          </div>

          <div className="cuenta-2">
            <h1>BN $ 123456/5464/0</h1>

            <p>$0</p>
            <p>Limite de extracción $100.000</p>

            <button onClick={verAlias2}>Ver Alias/CBU/CVU</button>

            <br />
            <button className="movimientos" /*onClick*/>Ver movimientos</button>
            <select name="" id="">
              <option value="">Del día</option>
              <option value="">Últimos 3 dias</option>
              <option value="">Últimos 7 dias</option>
              <option value="">Último mes</option>
            </select>
          </div>

          <div className="cuenta-usd">
            <h1>BN $ 123456/5464/0</h1>

            <p>$USD 0</p>
            <p>Limite de extracción USD$200</p>

            <button onClick={verAliasUSD}>Ver Alias/CBU/CVU</button>

            <br />
            <button className="movimientos" /*onClick*/>Ver movimientos</button>
            <select name="" id="">
              <option value="">Del día</option>
              <option value="">Últimos 3 dias</option>
              <option value="">Últimos 7 dias</option>
              <option value="">Último mes</option>
            </select>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cuentas;
