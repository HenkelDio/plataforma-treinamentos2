import styles from "./modalBuy.module.css";
import Modal from "react-modal";

export default function ModalBuy(props){
  return(
    <>
    <Modal
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.ModalQuestion}
    ariaHideApp={false}>


    </Modal>
    </>
  )
}