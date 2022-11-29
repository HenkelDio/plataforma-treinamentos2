import { useState } from "react";
import Modal from "react-modal";
import styles from "../modalEdit.module.css";
import Axios from "axios";

export default function ModalEditAdmin(props){
    const [userInfo, setuserInfo] = useState({});

    function excluirAdmin() {
        let route = `${require("../../../../../defaultRoute")}/removeUser`
        Axios.post(route, {
            type: "Admins",
            id: props.id
        })
    }

    function editInfo(field, value) {
        let previousState = userInfo;
        previousState[field] = value;
        setuserInfo(previousState);
    }

    function sendEdit() {
        let route = `${require("../../../../../defaultRoute")}/editUser`
        Axios.post(route, {
            type: "Admins",
            id: props.id,
            userInfo
        })
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
                    <input type="text" name="name" onChange={e => editInfo("admin_name", e.target.value)} defaultValue={props.name}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" onChange={e => editInfo("admin_email", e.target.value)} defaultValue={props.email}></input>
                </div>
            </div>
            <div className={styles.footerModal}>
                <button onClick={props.closeModal} className={styles.close} >Fechar</button>
                <button className={styles.delete} onClick={excluirAdmin} >Excluir</button>
                <button className={styles.save} onClick={sendEdit} >Salvar</button>
            </div>
        </Modal>
    )
}