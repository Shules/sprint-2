import Footer from "./general/Footer";
import styles from "../styles/Login.module.css";

function Login() {
  function loginConfirmation() {
    const user = document.getElementById(styles.user).value;
    const password = document.getElementById("password").value;
    const login = document.getElementById(styles.login);
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
        <div id={styles.login}>
          <div className={styles.bankLogo}>
            <img src="images/logo_banco.png" alt="bank_logo" />
          </div>
          <h1 className={styles.bankName}>MAZE BANK</h1> <br />
          <br />
          <br />
          <br />
          <h1 className={styles.title}>Inicio de sesión</h1>
          <br />
          <br />
          <form action="" className={styles.loginForm}>
            <input type="text" id={styles.user} placeholder="Usuario" />
            <br />

            <input type="password" id="password" placeholder="Contraseña" />
            <br />
          </form>
          <br />
          <button
            type="submit"
            id={styles.botonIniciarSesion}
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
