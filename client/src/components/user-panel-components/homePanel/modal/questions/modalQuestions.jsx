import styles from "./modalQuestions.module.css";
import Modal from "react-modal";

export default function ModalQuestion(props){

  console.log(props)

  return(
    <>
    <Modal
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.ModalLogout}
    ariaHideApp={false}>
    <div className={styles.headerModal}>
      <h1>Questões de {props.data.data.data.course_title}</h1>
    </div>

    </Modal>
    </>
  )
}
