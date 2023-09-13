function Login() {



  return (
    <main>
      <div id="login">
        <div className="bank_logo">
          <img src="img/logo_banco.png" alt="bank_logo" />
        </div>
        <h1 className="bank_name">MAZE BANK</h1> <br />
        <br />
        <br />
        <br />
        <h1 className="title">Inicio de sesión</h1>
        <br />
        <br />
        <form action="" className="login-form">
          <input type="text" id="user" placeholder="Usuario" />
          <br />

          <input type="password" id="password" placeholder="Contraseña" />
          <br />
        </form>{" "}
        <br />
        <button
          type="submit"
          id="boton-iniciarSesion"
          onClick={loginConfirmation()}
        >
          <span>Iniciar sesion</span>
        </button>
      </div>
    </main>
  );
}

export default Login;
