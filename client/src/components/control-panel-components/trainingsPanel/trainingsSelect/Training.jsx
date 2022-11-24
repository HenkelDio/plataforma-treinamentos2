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
        id={props.id}
        name={props.name}
        email={props.email}
        contact={props.contact}
        register={props.register}
        phone={props.phone}
        />
    <div onClick={openModal} className={styles.card}>
        <div className={styles.title}>
          <p>NR 20</p>
        </div>
        <div className={styles.features}>
          <button>Editar</button>
        </div>
    </div>
  </>
  )
}