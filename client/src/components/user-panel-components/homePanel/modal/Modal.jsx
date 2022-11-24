import Modal from 'react-modal';
import styles from "./modal.module.css";

export default function ModalTraining(props){
  return(
    <Modal 
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.modal}
    ariaHideApp={false}>
      <div className={styles.modalTraining}>
        <div className={styles.headerModal}>
          <h1>NR 20: Combate contra o Incêndio</h1>
        </div>
        <div className={styles.bodyModal}>
          <div className={styles.pdf}>
            aqui vai o pdf
          </div>
          <div className={styles.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo quos praesentium cupiditate eligendi minima ab expedita aperiam reprehenderit corporis ullam nesciunt? Quam provident explicabo earum laborum ipsa alias asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo quos praesentium cupiditate eligendi minima ab expedita aperiam reprehenderit corporis ullam nesciunt? Quam provident explicabo earum laborum ipsa alias asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo quos praesentium cupiditate eligendi minima ab expedita aperiam reprehenderit corporis ullam nesciunt? Quam provident explicabo earum laborum ipsa alias asperiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo quos praesentium cupiditate eligendi minima ab expedita aperiam reprehenderit corporis ullam nesciunt? Quam provident explicabo earum laborum ipsa alias asperiores.
            </p>
          </div>
          <div className={styles.features}>
            <button>ir para a prova</button>
            <button>Fechar</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}