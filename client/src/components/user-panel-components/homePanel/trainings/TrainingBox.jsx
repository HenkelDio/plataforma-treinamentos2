import styles from "./trainingBox.module.css"
import ModalTraining from "../modal/Modal"
import { useState } from "react";

export default function TrainingBox(){
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () =>{
      setIsOpen(true)
  }

  const closeModal = () =>{
      setIsOpen(false)
  }

  return(
    <>
      <ModalTraining 
       openModal={modalIsOpen} 
       closeModal={closeModal} 
      />

      <div className={styles.trainingBox}>
        <p>NR 20: Inflamáveis e Combustíveis</p>
      </div>
    </>
  )
}