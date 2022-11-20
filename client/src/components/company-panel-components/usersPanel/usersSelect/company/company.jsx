import styles from "../usersSelect.module.css"
import { useState } from "react";
import ModalEditCompany from "./modalEditCompany";

export default function Company(props){
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }

    return(
    <>
        <ModalEditCompany 
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