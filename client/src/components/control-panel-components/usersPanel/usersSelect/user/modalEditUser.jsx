import Modal from "react-modal";
import styles from "../modalEdit.module.css";
import { useState } from "react"
import Axios from "axios"

export default function ModalEditUser(props) {

    const [userInfo, setUserInfo] = useState({});

    function excluirUser() {
        let route = `${require("../../../../../defaultRoute")}/removeUser`
        Axios.post(route, {
            type: "Users",
            id: props.id
        })
        setTimeout(()=>{
            alert("Usuário excluído com sucesso")
            document.location.reload()
        },1000)
    }

    function editInfo(field, value) {
        let previousState = userInfo
        previousState[field] = value
        setUserInfo(previousState)
    }

    function sendEdit() {
        let route = `${require("../../../../../defaultRoute")}/editUser`
        Axios.post(route, {
            type: "Users",
            id: props.id,
            userInfo
        })
        setTimeout(()=>{
            alert("Usuário editado com sucesso")
            document.location.reload()
        },1000)
    }

    return (
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
                    <input type="text" name="name" defaultValue={props.name} onChange={e => editInfo("user_name", e.target.value)}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" defaultValue={props.email} onChange={e => editInfo("user_email", e.target.value)} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="register">CPF</label>
                    <input type="text" name="register" defaultValue={props.register} onChange={e => editInfo("user_register", e.target.value)} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" name="phone" defaultValue={props.phone} onChange={e => editInfo("user_telephone", e.target.value)} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="id_company">Registrado na empresa</label>
                    <input type="text" name="id_company" defaultValue={props.id_company}></input>
                </div>
            </div>
            <div className={styles.footerModal}>
                <button onClick={props.closeModal} className={styles.close}>Fechar</button>
                <button className={styles.delete} onClick={excluirUser} >Excluir</button>
                <button className={styles.save} onClick={sendEdit}>Salvar</button>
            </div>
        </Modal>
    )
}