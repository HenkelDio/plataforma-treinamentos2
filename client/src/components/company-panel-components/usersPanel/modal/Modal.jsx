import Modal from "react-modal";
import styles from "./modal.module.css"
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io"
import ModalUser from "./modal-users/modal-user/ModalUser";

export default function ModalAddUser(props){

    const closeModal = () =>{
        props.closeModal()
    }

    return(
        <div id="modalAddUser" className={styles.modalAddUser}>
            <Modal 
            isOpen={props.openModal}
            onRequestClose={closeModal}
            contentLabel="Exemplo"
            overlayClassName={styles.modalOverlay}
            className={styles.modal}
            ariaHideApp={false}>
                <div className={styles.headerModal}>
                    
                    <div onClick={closeModal} className={styles.closeModal}>
                        <IoIosArrowBack />
                    </div>

                    <h1 id="pageTitle">Criar novo usuário</h1>
                </div>
                <div id="bodyModal" className={styles.bodyModal}>
                </div>
                <div id="containerForm" className={styles.containerForm}>
                    <ModalUser /> 
                </div>
                
            </Modal>
        </div>
    )
}