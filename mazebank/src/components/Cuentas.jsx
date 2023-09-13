function Cuentas() {
  return (
    <main>
      <section id="cuentas-container">
        <div className="cuenta-1">
          <h1>BN $ 123456/5464/0</h1>

          <p>$0</p>
          <p>Limite de extracción $100.000</p>

          <button onclick="verAlias1()">Ver Alias/CBU/CVU</button>

          <br />
          <button className="movimientos" onclick="movimientos1()">
            Ver movimientos
          </button>
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

          <button onclick="verAlias2()">Ver Alias/CBU/CVU</button>

          <br />
          <button className="movimientos" onclick="movimientos2()">
            Ver movimientos
          </button>
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

          <button onclick="verAliasUSD()">Ver Alias/CBU/CVU</button>

          <br />
          <button className="movimientos" onclick="movimientosUSD()">
            Ver movimientos
          </button>
          <select name="" id="">
            <option value="">Del día</option>
            <option value="">Últimos 3 dias</option>
            <option value="">Últimos 7 dias</option>
            <option value="">Último mes</option>
          </select>
        </div>
      </section>
    </main>
  );
}

export default Cuentas;
