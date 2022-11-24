import Modal from 'react-modal';
import styles from "./modal.module.css";

export default function ModalTraining(){
  return(
    <Modal 
    isOpen={props.openModal}
    onRequestClose={closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.modal}
    ariaHideApp={false}>
    </Modal>
  )
}