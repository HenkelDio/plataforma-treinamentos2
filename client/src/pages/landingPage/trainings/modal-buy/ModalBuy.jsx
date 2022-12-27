import styles from "./modalBuy.module.css";
import Modal from "react-modal";


export default function ModalBuy(props){


  
  return(
    <div className={styles.modalBuyContainer}>
    <Modal
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.modalBuy}
    ariaHideApp={false}>

      <div className={styles.header}>
        <div onClick={props.closeModal} className={styles.close}>
          <p>X</p>
        </div>
        <div className={styles.bodyModal}>
          <h3>Tem certeza que gostaria de comprar o curso <br/><i>{props.title}</i>?</h3>
        </div>
        <div className={styles.footer}>
          <a href={`https://wa.me/5541998093723?text=Olá, visitei seu site e gostaria de obter o curso de ${props.title}`}>Sim, obter curso</a>
        </div>
      </div>

    </Modal>
    </div>
  )
}