import React from "react";
import styles from "./Modalwindow.module.scss";
import Modal from "react-modal";
import closeModal from "../../shared/assets/icons/close-modal.png";

Modal.setAppElement("#root");
const ModalWindow = ({title , children, visible, setVisible, closeButton = true }) => {
  const customStyles = {
    overlay: {
      backdropFilter: "blur(4px)",
      background: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "999",
    },
    content: {
      position: "static",
      padding: "0px",
      width: "clamp(50% , 700px , 90%)",
      height: "auto",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      borderRadius: "6px",
      border: "1px solid #d1d5db",
      background: "#fff",
    },
  };

  return (
    <Modal
      isOpen={visible}
      onRequestClose={() => setVisible(false)}
      style={customStyles}
    >
      <div className={styles.modal_head}>
        <h3 className={styles.modal_title}>Modal title</h3>
        <button className={styles.close} onClick={() => setVisible(false)}>
        <img src={closeModal} alt="" />
      </button>
      </div>
      <div className={styles.modal_body}>
      {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
