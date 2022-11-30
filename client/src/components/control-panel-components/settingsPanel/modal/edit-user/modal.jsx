import styles from "./modal.module.css";
import Modal from "react-modal";

export default function ModalEditUser(props) {
  return (
    <div className={styles.modalEditUser}>
      <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.modal}
        ariaHideApp={false}
      >
        <div className={styles.headerModal}>
          <h2>Editar</h2>
        </div>
        <div className={styles.bodyModal}>
          <div className={styles.boxInput}>
            <label htmlFor="id">#id</label>
            <input
              type="text"
              name="id"
              className={styles.id}
              disabled
              defaultValue={props.id}
            ></input>
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" defaultValue={props.name}></input>
          </div>
          <div className={styles.boxInput}>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              defaultValue={props.email}
            ></input>
          </div>
        </div>
        <div className={styles.footerModal}>
          <button onClick={props.closeModal} className={styles.close}>
            Fechar
          </button> 
          <button className={styles.save}>Salvar</button>
        </div>
      </Modal>
    </div>
  );
}
