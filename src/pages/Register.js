import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import growl from "growl-alert";
import { app } from "../firebase.js";
import Input from "../components/Input.js";
import Button from "../components/Button";
import Select from "../components/Select";

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
  },
  button: {
    backgroundColor: "rgb(99, 188, 80)",
    ":hover": {
      backgroundColor: "#444444",
      color: "#c7c7cc",
    },
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "6px",
    borderRadius: "6px",
    width: "100px",
    textAlign: "center",
    marginTop: "2%",
    outline: "none",
  },
});

const option = {
  fadeAway: true,
  fadeAwayTimeout: 2000,
};

const Register = () => {
  const [nameState, setName] = useState("");
  const [serviceState, setService] = useState("Salão");
  const [emailState, setEmail] = useState("");
  const [passWordState, setPassword] = useState("");

  const history = useHistory();

  const register = () => {
    if (nameState.length > 0) {
      app
        .auth()
        .createUserWithEmailAndPassword(emailState, passWordState)
        .then(() => {
          app.firestore().collection("users")
            .doc(app.auth().currentUser.uid)
            .set({
              name: nameState,
              service: serviceState,
              email: emailState,
              password: passWordState,
              userId: app.auth().currentUser.uid,
              addedAt: (new Date()).toLocaleString("pt-BR"),
            });
        }).then(() => {
          if (serviceState === "bartender") {
            history.push("/bartender");
            growl.success({ text: "Bem vindo!", ...option });
          } else {
            history.push("/kitchen");
            growl.success({ text: "Bem vindo!", ...option });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            growl.error({ text: "E-mail já possui uma conta cadastrada!", ...option });
          } else if (errorCode === "auth/invalid-email") {
            growl.error({ text: "Formato de email inválido!", ...option });
          } else if (errorCode === "auth/weak-password") {
            growl.error({ text: "Senha deve possuir no mínimo 6 caracteres!", ...option });
          }
        });
    } else {
      growl.warning({
        text: "Preencha seu nome",
        ...option,
      });
    }
  };
  return (
    <>
      <div className={css(styles.img)}>
        <img src="/images/Logo.png" alt="Imagem do Logo com o desenho de um Hamburguer" />
      </div>
      <header className={css(styles.header)}>
        <h1>Burguer Queen</h1>
        <h2>Preencha seus dados e registre-se!</h2>
      </header>
      <form className={css(styles.form)}>
        <Input className={css(styles.input)} value={nameState} type="text" placeholder="Nome" onChange={(e) => setName(e.currentTarget.value)} />
        <Select onChange={(e) => setService(e.currentTarget.value)} />
        <Input className={css(styles.input)} value={emailState} type="e-mail" placeholder="exemplo@exemplo.com" onChange={(e) => setEmail(e.currentTarget.value)} />
        <Input className={css(styles.input)} value={passWordState} type="password" placeholder="Senha" onChange={(e) => setPassword(e.currentTarget.value)} />
        <div>
          <Button
            className={css(styles.button)}
            title="Voltar"
            onClick={() => {
              history.push = ("/");
            }}
          />
          <Button
            className={css(styles.button)}
            title="Registrar"
            onClick={(e) => { register(); e.preventDefault(); }}
          />
        </div>
      </form>
    </>

  );
};

export default Register;
