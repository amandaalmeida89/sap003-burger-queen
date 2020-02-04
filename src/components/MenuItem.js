import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { Modal, Button } from "react-bootstrap";
import Input from "./Input";
import ButtonComponent from "./Button";


const styles = StyleSheet.create({
  divMenuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10%",
    "@media (min-width: 1200px)": {
      marginBottom: "5%",
      "@media (min-width: 1200px)": {
        justifyContent: "space-around",
      },
    },
  },
  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    "@media only screen and (min-width: 768px) and (max-width: 979px)": {
      fontSize: "18px",
    },
  },
  labelItem: {
    width: "250px",
    "@media (min-width: 1200px)": {
      width: "100%",
    },
  },
  input: {
    width: "30%",
    height: "150px",
    outline: "none",
    backgroundColor: "#FFFAFA",
    border: "5px solid orange",
    "@media only screen and (min-width: 768px) and (max-width: 979px)": {
      height: "100px",
    },
    "@media (min-width: 1200px)": {
      width: "20%",
      height: "130px",
    },

  },
  modalBackground: {
    position: "absolute",
    backgroundColor: "#000000aa",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
  },
  modalContent: {
    width: "300px",
    height: "auto",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "8px",
    position: "absolute",
    top: "30%",
    left: "40%",
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
  borderButtons: {
    borderTop: "1px solid gray",
    marginTop: "15%",
  },
  borderModalBody: {
    borderTop: "1px solid gray",
    marginTop: "3%",
  },
  titleModal: {
    fontWeight: "bold",
  },
  btnClose: {
    color: "white",
    backgroundColor: "grey",
    fontSize: "22px",
    fontWeight: "bold",
    borderRadius: "6px",
    outline: "none",
    width: "115px",
    height: "50px",
    marginRight: "5%",
    marginTop: "5%",
  },

});


const MenuItem = (props) => {
  const [show, setOpen] = useState(false);
  const [extras, setExtra] = useState("");
  const item = props.item;

  if (item.subcategory !== "hamburguer") {
    return (
      <section className={css(styles.divMenuItem)} key={item.id}>
        <Input onClick={props.onClick} className={css(styles.input)} src={item.img} type="image" id={item.id} value={item.id} />
        <label className={css(styles.label, styles.labelItem)} htmlFor={item.id}>{item.name}</label>
        <label className={css(styles.label)} htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
      </section>
    );
  }
  return (
    <section className={css(styles.divMenuItem)} key={item.id}>
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
      <label className={css(styles.label, styles.labelItem)} htmlFor={item.id}>{item.name}</label>
      <label className={css(styles.label)} htmlFor={item.id}>{item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</label>
      {
        show
          ? (
            <div className={css(styles.modalBackground)}>
              <Modal.Dialog
                className={css(styles.modalContent)}
                show={show}
                onHide={() => setOpen(false)}
              >
                <Modal.Header>
                  <Modal.Title className={css(styles.titleModal)}>
                    Extras:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className={css(styles.borderModalBody)}>
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
                <Modal.Footer className={css(styles.borderButtons)}>
                  <Button className={css(styles.btnClose)} variant="danger" onClick={() => setOpen(false)}>Fechar</Button>
                  <ButtonComponent
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
              </Modal.Dialog>
            </div>
          )
          : ""
      }
    </section>
  );
};

export default MenuItem;
