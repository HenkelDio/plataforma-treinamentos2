import styles from "../modalEdit.module.css";
import Modal from "react-modal";
import Axios from "axios";

export default function ModalDeleteCompany(props) {

  function excluirCompany() {
    let route = `${require("../../../../../defaultRoute")}/removeUser`
    Axios.post(route, {
        type: "Companies",
        id: props.id
    })

    let sucessMessage = document.getElementById("sucessMessage")
    sucessMessage.style.display = "block"

    setTimeout(()=>{
        document.location.reload()
    },1000)
}

  return(
    <>
    <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.ModalDeleteUser}
        ariaHideApp={false}>

          <div className={styles.containerModalDeleteUser}>
            <h2>Tem certeza que gostaria de deletar esse usuário?</h2>
            <div className={styles.optionsModalDeleteUser}>
              <button onClick={excluirCompany}>Sim, excluir</button>
              <button onClick={props.closeModal}>Não</button>
            </div>
            <div id="sucessMessage" className={styles.sucessMessage}>
                <p>Usuário deletado com sucesso!</p>
            </div>
          </div>
          
        </Modal>
    </>
  )
}