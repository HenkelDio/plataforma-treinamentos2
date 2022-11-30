import Modal from 'react-modal';
import styles from "./modal.module.css";
import Pdf from "./pdf/pdf.jsx"

export default function ModalTraining(props){

  console.log(props)

  return(
    <Modal 
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.modal}
    ariaHideApp={false}>
      <div className={styles.modalTraining}>
        <div className={styles.headerModal}>
          <h1>{props.data.data.course_title}</h1>
        </div>
        <div className={styles.bodyModal}>
          <div className={styles.pdf}>
            <Pdf />
          </div>
          <div className={styles.content}>
            <p>
              {props.data.data.content}
            </p>
          </div>
          <div className={styles.features}>
            <button>ir para a prova</button>
            <button onClick={props.closeModal}>Fechar</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}