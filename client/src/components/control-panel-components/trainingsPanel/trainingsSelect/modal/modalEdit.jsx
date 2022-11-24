import Modal from "react-modal";
import styles from "./modalEdit.module.css";

export default function ModalEdit(props){
    
    console.log(props)

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
                    <input type="text" name="id" className={styles.id} disabled defaultValue={props.data.course_id}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="name">Título</label>
                    <input type="text" name="name" defaultValue={props.data.course_title} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="content">Conteúdo</label>
                    <textarea name="content" className={styles.content} defaultValue={props.data.course_content}></textarea>
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