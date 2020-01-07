import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  input: {
    fontSize: "20px",
    fontWeight: "bold",
    width: "40.5%",
    height: "45px",
    borderRadius: "6px",
    marginBottom: "1%",
    textAlignLast: "center",
    backgroundColor: "white",
  },
});

const Select = (props) => (
  <select className={css(styles.input)} onChange={props.onChange} defaultValue="Departamento">
    <option disabled>Departamento</option>
    <option value="bartender">Salão</option>
    <option value="kitchen">Cozinha</option>
  </select>
);

export default Select;
