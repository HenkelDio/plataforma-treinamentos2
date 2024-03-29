import Modal from "react-modal";
import styles from "../modalEdit.module.css";
import ModalDeleteUser from "../modal-delete-user/ModalDeleteUser";
import ModalConfirmPasswordUser from "../modal-confirm-password/ModalConfirmPasswordUser";
import SelectRegistration from "./SelectRegistrations";
import { useState } from "react"
import Axios from "axios"

export default function ModalEditUser(props) {
    const [userInfo, setUserInfo] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalConfirmPasswordIsOpen, setModalConfirmPasswordIsOpen] = useState(false)
    const [selected, setSelected] = useState([]);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModalConfirmPassword = () => {
        setModalConfirmPasswordIsOpen(true)
    }

    const closeModalConfirmPassword = () => {
        setModalConfirmPasswordIsOpen(false)
    }

    function editInfo(field, value) {
        let previousState = userInfo
        previousState[field] = value
        setUserInfo(previousState)
    }

    function sendEdit() {
        let route = `${require("../../../../../defaultRoute")}/editUser`
        let data = {
            type: "Users",
            id: props.id,
            userInfo,
            selected
        }
        Axios.post(route, data)
        setTimeout(() => {
            alert("Usuário editado com sucesso")
            document.location.reload()
        }, 1000)
    }

    return (
        <Modal
            isOpen={props.openModal}
            onRequestClose={props.closeModal}
            contentLabel="Exemplo"
            overlayClassName={styles.modalOverlay}
            className={styles.modal}
            ariaHideApp={false}>

            <ModalDeleteUser openModal={modalIsOpen} closeModal={closeModal} id={props.id} />

            <ModalConfirmPasswordUser openModal={modalConfirmPasswordIsOpen} 
            closeModal={closeModalConfirmPassword}
            userId={props.id}
            />

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
                    <input type="text" name="id_company" disabled defaultValue={props.companyName}></input>
                </div>
                <div className={styles.boxInput}>
                    <button 
                    onClick={openModalConfirmPassword} 
                    className={styles.newPasswordBtn}>Redefinir senha</button>
                </div>
                <div className={styles.boxInput}>
                    <label>Matrículado em</label>
                    <SelectRegistration selected={selected} setSelected={setSelected} userId={props.id} />
                </div>
            </div>
            <div className={styles.footerModal}>
                <button onClick={props.closeModal} className={styles.close}>Fechar</button>
                <button className={styles.delete} onClick={openModal} >Excluir</button>
                <button className={styles.save} onClick={sendEdit}>Salvar</button>
            </div>
        </Modal>
    )
}