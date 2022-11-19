import styles from "../usersSelect.module.css"
import ModalEditAdmin from "./modalEditAdmin";
import { useState } from "react";

export default function Admin(props){
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }

    return(
        <>

        <ModalEditAdmin 
        openModal={modalIsOpen} 
        closeModal={closeModal} 
        id={props.id}
        name={props.name}
        email={props.email}
        />
        
        <div onClick={openModal} className={styles.card}>
            <div className={styles.name}>
                <p>{props.name}</p>
            </div>
            <div className={styles.email}>
                <p>{props.email}</p>
            </div>
            <div className={styles.features}>
                <button>Editar</button>
            </div>
        </div>

        </>

    )
}