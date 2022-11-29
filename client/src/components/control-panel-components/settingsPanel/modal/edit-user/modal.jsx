import styles from "./modal.module.css";
import Modal from "react-modal";

export default function ModalEditUser(props) {
  return(
    <div className={styles.modal}>
      <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.modal}
        ariaHideApp={false}></Modal>
    </div>
  )
}