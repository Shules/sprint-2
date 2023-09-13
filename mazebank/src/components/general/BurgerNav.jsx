function BurgerNav() {
  return (
    <>
      <section id="menu">
        <a href="#menu">
          <img src="img/burger_menu.png" alt="Logo abrir menu" id="abrir" />
        </a>
        <a href="#">
          <img src="img/cerrar_menu.png" alt="Logo cerrar menu" id="cerrar" />
        </a>
        <nav id="contenedor-enlaces">
          <ul>
            <li class="inicio">
              <a href="#">INICIO</a>
            </li>
            <li class="cuentas">
              <a href="cuentas.html">CUENTAS</a>
            </li>
            <li class="transf">
              <a href="transferencias.html">TRANSFERENCIAS</a>
            </li>
            <li class="pagos">
              <a href="pagos.html">PAGOS</a>
            </li>
            <li class="prestamos">
              <a href="prestamos.html">PRESTAMOS</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default BurgerNav;
