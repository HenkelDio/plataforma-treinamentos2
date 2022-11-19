import { useState } from "react";
import Modal from "react-modal";
import styles from "../modalEdit.module.css";
import Axios from "axios";

export default function ModalEditAdmin(props){
    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        email: props.email
    })

    const handleEditValues = async =>{
        Axios.put("http://localhost:3001/editAdmin", {
            id: editValues.id,
            name: editValues.name,
            email: editValues.email
        })
        
        props.closeModal()
        document.location.reload()
    }

    const handleChangeValues = value =>{
        setEditValues(prevValues=>({
            ...prevValues,
            [value.target.id]: value.target.value,
        }))
    }

    return(
        <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.modal}
        ariaHideApp={false}>
            <div className={styles.headerModal}>
                <h2>Editar</h2>
            </div>
            <div className={styles.bodyModal}>
                <div className={styles.boxInput}>
                    <label htmlFor="id">#id</label>
                    <input type="text" name="id" className={styles.id} disabled defaultValue={props.id}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name="name" onChange={handleChangeValues} defaultValue={props.name}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" onChange={handleChangeValues} defaultValue={props.email}></input>
                </div>
            </div>
            <div className={styles.footerModal}>
                <button onClick={props.closeModal} className={styles.close}>Fechar</button>
                <button className={styles.delete}>Excluir</button>
                <button onClick={handleEditValues} className={styles.save}>Salvar</button>
            </div>
        </Modal>
    )
}