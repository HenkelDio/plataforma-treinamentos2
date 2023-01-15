import styles from "../modalEdit.module.css";
import Modal from "react-modal";
import Axios from "axios";

export default function ModalConfirmPassword(props) {

  function redefinePassword() {
    const route = `${require("../../../../../defaultRoute")}/resetPassword`
    const data = {
      userId: props.userId,
      userType: JSON.parse(localStorage["user"])
    }

    Axios.post(route, data).then(res => {
      console.log(res)
    })
  }

  return(
    <>
    <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.ModalConfirmPassword}
        ariaHideApp={false}>

          <div className={styles.containerModalDeleteUser}>
            <h2>Tem certeza que gostaria de redefinir a senha desse usuário?</h2>
            <div className={styles.optionsModalDeleteUser}>
              <button onClick={redefinePassword} >Sim, redefinir</button>
              <button onClick={props.closeModal}>Não</button>
            </div>
            <div id="sucessMessage" className={styles.sucessMessage}>
                <p>Senha redefinida com sucesso!</p>
            </div>
          </div>
          
        </Modal>
    </>
  )
}