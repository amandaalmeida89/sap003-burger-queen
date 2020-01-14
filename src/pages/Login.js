import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import growl from "growl-alert";
import "growl-alert/dist/growl-alert.css";
import { auth } from "../firebase.js";
import Input from "../components/Input.js";
import Button from "../components/Button";

const styles = StyleSheet.create({
  img: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "3%",
  },
  input: {
    fontSize: "20px",
    fontWeight: "bold",
    width: "40%",
    height: "40px",
    textAlign: "center",
    borderRadius: "6px",
    marginBottom: "1%",
    "@media (min-width: 1200px)": {
      width: "25%",
    },
  },
  button: {
    backgroundColor: "rgb(15, 155, 0)",
    ":hover": {
      backgroundColor: "#444444",
      color: "#c7c7cc",
    },
    color: "white",
    fontSize: "22px",
    fontWeight: "bold",
    padding: "6px",
    borderRadius: "6px",
    width: "110px",
    height: "50px",
    textAlign: "center",
    marginTop: "2%",
    outline: "none",
  },
  divButton: {
    width: "16rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const option = {
  fadeAway: true,
  fadeAwayTimeout: 2000,
};

const Login = () => {
  const [emailState, setEmail] = useState("");
  const [passWordState, setPassword] = useState("");
  const history = useHistory();

  const login = () => {
    auth
      .signInWithEmailAndPassword(emailState, passWordState)
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          growl.error({ text: "Senha Incorreta", ...option });
        } else if (errorCode === "auth/user-not-found") {
          growl.error({ text: "Email não registrado!", ...option });
        } else if (errorCode === "auth/invalid-email") {
          growl.error({ text: "Formato de email inválido", ...option });
        }
      });
  };

  return (
    <>
      <div className={css(styles.img)}>
        <img src="/images/Logo.png" alt="Imagem do Logo com o desenho de um Hamburguer" />
      </div>
      <header className={css(styles.header)}>
        <h1>Burguer Queen</h1>
        <h2>Preencha seus dados e faça login!</h2>
      </header>
      <main>
        <form className={css(styles.form)}>
          <Input className={css(styles.input)} value={emailState} type="e-mail" placeholder="exemplo@exemplo.com" onChange={(e) => setEmail(e.currentTarget.value)} />
          <Input className={css(styles.input)} value={passWordState} type="password" placeholder="Senha" onChange={(e) => setPassword(e.currentTarget.value)} />
          <div className={css(styles.divButton)}>
            <Button
              className={css(styles.button)}
              title="Login"
              onClick={(e) => {
                login(); e.preventDefault();
              }}
            />
            <Button
              className={css(styles.button)}
              title="Registrar"
              onClick={(e) => {
                history.push("/register"); e.preventDefault();
              }}
            />
          </div>
        </form>
      </main>
    </>

  );
};
export default Login;
