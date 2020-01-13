import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { Modal, Button } from "react-bootstrap";
import Input from "./Input";
import ButtonOne from "./Button";


const styles = StyleSheet.create({
  divMenuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "10%",
    outline: "none",
  },
  modalContent: {
    width: "300px",
    height: "auto",
    background: "white",
    borderRadius: "10px",
    padding: "8px",
    position: "relative",
    margin: "-600px auto",
    fontSize: "25px",
    textAlign: "center",
    color: "black",
    outline: "none",
  },
  btnAdd: {
    color: "white",
    backgroundColor: "rgb(15, 155, 0)",
    fontSize: "22px",
    fontWeight: "bold",
    borderRadius: "6px",
    outline: "none",
    width: "115px",
    height: "50px",
  },
  inputModal: {
    width: "30%",
    height: "2.5em",
  },
  labelModal: {
    width: "80%",
  },
  radio: {
    display: "flex",
    marginTop: "15%",
  },
  btnClose: {
    color: "white",
    backgroundColor: "rgb(234, 29, 44)",
    fontSize: "22px",
    fontWeight: "bold",
    borderRadius: "6px",
    outline: "none",
    width: "115px",
    height: "50px",
    marginRight: "5%",
    marginTop: "15%",
  },
});


const MenuItem = (props) => {
  const [show, setOpen] = useState(false);
  const [extras, setExtra] = useState("");
  const item = props.item;

  if (item.subcategory !== "hamburguer") {
    return (
      <div className={css(styles.divMenuItem)} key={item.id}>
        <Input onClick={props.onClick} className={css(styles.input)} src={item.img} type="image" id={item.id} value={item.id} />
        <label className={css(styles.label)} htmlFor={item.id}>{item.name}</label>
        <label className={css(styles.label)} htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
      </div>
    );
  }
  return (
    <div className={css(styles.divMenuItem)} key={item.id}>
      <div id="jumbo-div">
        <Input
          className={css(styles.input)}
          id={item.id}
          src={item.img}
          type="image"
          value={item.id}
          onClick={(e) => {
            setOpen(true);
            e.preventDefault();
          }}
        />
      </div>
      <label className={css(styles.label)} htmlFor={item.id}>{item.name}</label>
      <label className={css(styles.label)} htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
      {
        show
          ? (
            <Modal
              className={css(styles.modalContent)}
              size="sm"
              show={show}
              onHide={() => setOpen(false)}
            >
              <Modal.Body>
                {item.extras.map((extra) => (
                  <div className={css(styles.radio)} key={extra}>
                    <label className={css(styles.labelModal)} htmlFor={extra}>{`${extra} R$ 1,00`}</label>
                    <input
                      className={css(styles.inputModal)}
                      type="radio"
                      value={extra}
                      onChange={() => setExtra(extra)}
                      checked={extra === extras}
                    />
                  </div>
                ))}
              </Modal.Body>
              <Modal.Footer>
                <Button className={css(styles.btnClose)} variant="danger" onClick={() => setOpen(false)}>Fechar</Button>
                <ButtonOne
                  className={css(styles.btnAdd)}
                  onClick={(e) => {
                    props.onItemAdd(props.item, extras);
                    setOpen(false);
                    setExtra("");
                    e.preventDefault();
                  }}
                  title="Adicionar"
                />
              </Modal.Footer>
            </Modal>
          )
          : ""
      }
    </div>
  );
};

export default MenuItem;
