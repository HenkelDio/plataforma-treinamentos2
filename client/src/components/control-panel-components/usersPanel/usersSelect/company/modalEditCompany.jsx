import Modal from "react-modal";
import styles from "../modalEdit.module.css";
import Axios from "axios"
import ModalDeleteCompany from "../modal-delete-user/ModalDeleteCompany";
import ModalConfirmPassword from "../modal-confirm-password/ModalConfirmPassword";
import { useState } from "react";
import SelectRegistration from "./SelectRegistrations";

export default function ModalEditCompany(props){
    const [userInfo, setUserInfo] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const [modalConfirmPasswordIsOpen, setModalConfirmPasswordIsOpen] = useState(false)

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }

    const openModalConfirmPassword = () => {
        setModalConfirmPasswordIsOpen(true)
    }

    const closeModalConfirmPassword = () => {
        setModalConfirmPasswordIsOpen(false)
    }

    function editInfo(field, value) {
        let previousState = userInfo;
        previousState[field] = value;
        setUserInfo(previousState);
    }
    
    function sendEdit() {
        let route = `${require("../../../../../defaultRoute")}/editUser`
        Axios.post(route, {
            type: "Companies",
            id: props.id,
            userInfo,
            selected
        })
        setTimeout(()=>{
            alert("Usuário editado com sucesso")
            document.location.reload()
        },1000)
    }

    return(
        <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.modal}
        ariaHideApp={false}>

            <ModalDeleteCompany openModal={modalIsOpen} closeModal={closeModal} id={props.id}/>

            
            <ModalConfirmPassword openModal={modalConfirmPasswordIsOpen} 
            closeModal={closeModalConfirmPassword}
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
                    <input type="text" name="name" defaultValue={props.name} onChange={e => editInfo("company_name", e.target.value)} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" defaultValue={props.email} onChange={e => editInfo("company_email", e.target.value)} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="contact">Contato</label>
                    <input type="text" name="contact" defaultValue={props.contact} onChange={e => editInfo("company_contact", e.target.value)} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="register">CNPJ</label>
                    <input type="text" name="register" defaultValue={props.register} onChange={e => editInfo("company_register", e.target.value)} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" name="phone" defaultValue={props.phone} onChange={e => editInfo("company_telephone", e.target.value)} ></input>
                </div>
                <div className={styles.boxInput}>
                    <button 
                    onClick={openModalConfirmPassword}
                    className={styles.newPasswordBtn}>Redefinir senha</button>
                </div>
                <div className={styles.boxInput}>
                    <label>Treinamentos disponíveis nessa empresa</label>
                    <SelectRegistration selected={selected} setSelected={setSelected} companyId={props.id} />
                </div>
            </div>
            <div className={styles.footerModal}>
                <button onClick={props.closeModal} className={styles.close}>Fechar</button>
                <button className={styles.delete} onClick={openModal}>Excluir</button>
                <button className={styles.save} onClick={sendEdit} >Salvar</button>
            </div>
        </Modal>
    )
}