import styles from "./trainingBox.module.css"
import ModalTraining from "../modal/Modal"
import { useState } from "react";
import { MdSchool } from "react-icons/md"

export default function TrainingBox(props){
  const [modalIsOpen, setIsOpen] = useState(false);

  console.log(props)

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
        <p><MdSchool /></p>
        <p>{props.data.course_title}</p>
        <p><b>{props.data.course_hours} Horas</b></p>
      </div>
    </>
  )
}