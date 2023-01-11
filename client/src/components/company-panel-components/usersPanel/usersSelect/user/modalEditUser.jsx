import Modal from "react-modal";
import styles from "../modalEdit.module.css";
import SelectRegistration from "./SelectRegistrations";
import { useState } from "react";

export default function ModalEditUser(props){
    const [selected, setSelected] = useState([]);

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
                    <input type="text" name="name" defaultValue={props.name}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" defaultValue={props.email}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="register">CPF</label>
                    <input type="text" name="register" defaultValue={props.register}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" name="phone" defaultValue={props.phone}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="id_company">Registrado na empresa</label>
                    <input type="text" name="id_company" defaultValue={props.id_company}></input>
                </div>
                <div className={styles.boxInput}>
                    <label>Treinamentos disponíveis nessa empresa</label>
                    <SelectRegistration selected={selected} setSelected={setSelected} />
                </div>
            </div>
            <div className={styles.footerModal}>
                <button onClick={props.closeModal} className={styles.close}>Fechar</button>
                <button className={styles.delete}>Excluir</button>
                <button className={styles.save}>Salvar</button>
            </div>
        </Modal>
    )
}