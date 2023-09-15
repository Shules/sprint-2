import Footer from "./general/Footer";
import styles from "../styles/Login.module.css";

function Login() {
  function loginConfirmation() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const login = document.getElementById("login");
    const error = document.createElement("p");

    if (user === "A" && password === "123456789") {
      window.location = "/";
    } else {
      error.textContent = "Usuario o contraseña incorrecta";
      error.style.color = "red";
      login.appendChild(error);
    }
  }

  return (
    <>
      <main>
        <div id="login">
          <div className="bank_logo">
            <img src="images/logo_banco.png" alt="bank_logo" />
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
            onClick={loginConfirmation}
          >
            <span>Iniciar sesion</span>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
