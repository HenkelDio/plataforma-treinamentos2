import Modal from 'react-modal';
import styles from "./modal.module.css";
import FramePdf from './pdf/FramePdf';
import ModalConclusion from './confirm-conclusion-modal/ModalConclusion';
import { useState } from 'react';
import sample from "./pdf/firstlook.pdf"

export default function ModalTraining(props){
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () =>{
    setIsOpen(true)
  }

  const closeModal = () =>{
    setIsOpen(false)
  }
  

  return(
    <Modal 
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.modal}
    ariaHideApp={false}>

      <ModalConclusion openModal={isOpen} closeModal={closeModal} data={props}/>

      <div className={styles.modalTraining}>
        <div className={styles.headerModal}>
          <h1>{props.data.data.course_title}</h1>
        </div>
        <div className={styles.bodyModal}>
          <div className={styles.pdf}>
            <FramePdf courseId={props.data.data.course_id}/>
          </div>
          <a href={sample}>Ou faça download PDF</a>
          <div className={styles.content}>
            <p>
              {props.data.data.content}
            </p>
          </div>
          <div className={styles.features}>
            <button onClick={openModal}>Concluir Treinamento</button>
            <button onClick={props.closeModal}>Fechar</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}