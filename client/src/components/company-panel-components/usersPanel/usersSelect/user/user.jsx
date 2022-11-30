import styles from "../usersSelect.module.css"
import { useState } from "react";
import ModalEditUser from "./modalEditUser"

export default function User(props){
    const [modalIsOpen, setIsOpen] = useState(false);

    console.log("user", props)

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
        id={props.data.user_id}
        name={props.data.user_name}
        email={props.data.user_email}
        id_company={props.data.user_company_id}
        register={props.data.user_register}
        phone={props.data.user_telephone}
        />
        
        <div onClick={openModal} className={styles.card}>
            <div className={styles.name}>
                <p>{props.data.user_name}</p>
            </div>
            <div className={styles.email}>
                <p>{props.data.user_email}</p>
            </div>
            <div className={styles.features}>
                <button>Editar</button>
            </div>
        </div>
    
        </>

    )
}