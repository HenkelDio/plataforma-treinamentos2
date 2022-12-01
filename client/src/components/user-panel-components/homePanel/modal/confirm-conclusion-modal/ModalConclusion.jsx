import styles from "./modalConclusion.module.css";
import Modal from "react-modal";
import ModalQuestion from "../questions/modalQuestions";
import { useState } from "react";

export default function ModalConclusion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () =>{
    setIsOpen(true)
  }

  const closeModal = () =>{
    setIsOpen(false)
  }


  return(
    <>
    <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.ModalLogout}
        ariaHideApp={false}>

          <ModalQuestion openModal={isOpen} closeModal={closeModal} data={props.data}/>

          <div className={styles.containerModalLogout}>
            <h2>Tem certeza que gostaria de concluir o treinamento?</h2>
            <div className={styles.optionsModalLogout}>
              <button onClick={openModal}>Sim, concluir treinamento</button>
              <button onClick={props.closeModal}>Não</button>
            </div>
          </div>
          
        </Modal>
    </>
  )
}