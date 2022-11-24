import styles from "./training.module.css";
import ModalEdit from "./modal/modalEdit";
import { useState } from "react";

export default function Training(props){

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }

    return(
    <>
        <ModalEdit 
        openModal={modalIsOpen} 
        closeModal={closeModal} 
        data={props.data}
        />
    <div onClick={openModal} className={styles.card}>
        <div className={styles.title}>
          <p>{props.data.course_title}</p>
        </div>
        <div className={styles.features}>
          <button>Editar</button>
        </div>
    </div>
  </>
  )
}