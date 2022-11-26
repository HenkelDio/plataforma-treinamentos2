import Modal from "react-modal";
import styles from "./modalEdit.module.css";
import Axios from "axios"

export default function ModalEdit(props){

    function deleteCourse() {
        let { course_id } =  props.data
        let route = `http://191.101.71.229:3001/deleteCourse/${course_id}`
        Axios.delete(route).then(res => {
            if (res) {
                console.log(res)
            }
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
                    <input type="text" name="id" className={styles.id} disabled defaultValue={props.data.course_id}></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="name">Título</label>
                    <input type="text" name="name" defaultValue={props.data.course_title} ></input>
                </div>
                <div className={styles.boxInput}>
                    <label htmlFor="content">Conteúdo</label>
                    <textarea name="content" className={styles.content} defaultValue={props.data.content}></textarea>
                </div>
            </div>
            <div className={styles.footerModal}>
                <button onClick={props.closeModal} className={styles.close}>Fechar</button>
                <button className={styles.delete} onClick={deleteCourse}>Excluir</button>
                <button className={styles.save}>Salvar</button>
            </div>
        </Modal>
    )
}