import styles from "./modal.module.css";
import Modal from "react-modal";

export default function ModalLogout(props) {
  return(
    <div className={styles.modal}>
      <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.modal}
        ariaHideApp={false}>

        <div className={styles.container}>
          
        </div>
        </Modal>
    </div>
  )
}