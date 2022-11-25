import styles from "./trainingBox.module.css"
import ModalTraining from "../modal/Modal"
import { useState } from "react";

export default function TrainingBox(props){
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
       data={props}
      />

      <div onClick={openModal} className={styles.trainingBox}>
        <p>{props.data.course_title}</p>
      </div>
    </>
  )
}