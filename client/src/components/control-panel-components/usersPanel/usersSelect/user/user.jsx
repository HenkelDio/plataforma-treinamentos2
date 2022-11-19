import styles from "../usersSelect.module.css"
import { useState } from "react";
import ModalEditUser from "./modalEditUser"

export default function User(props){
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }

    return(
        <>
        <ModalEditUser 
        openModal={modalIsOpen} 
        closeModal={closeModal} 
        id={props.id}
        name={props.name}
        email={props.email}
        id_company={props.id_company}
        register={props.register}
        phone={props.phone}
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