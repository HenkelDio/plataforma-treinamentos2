import styles from "./modalDeleteTraining.module.css";
import Modal from "react-modal";
import Axios from "axios";

export default function ModalDeleteTraining(props) {

  console.log(props.data)

  function deleteCourse() {
    let { course_id } =  props.data
    let route = `${require("../../../../../defaultRoute")}/deleteCourse/${course_id}`
    Axios.delete(route).then(res => {
      let sucessMessage = document.getElementById("sucessMessage")
      sucessMessage.style.display = "block"
  
      setTimeout(()=>{
          document.location.reload()
      },1000)
    })
}

  return(
    <>
    <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.ModalDeleteTraining}
        ariaHideApp={false}>

          <div className={styles.containerModalDeleteTraining}>
            <h2>Tem certeza que gostaria de deletar esse treinamento?</h2>
            <div className={styles.optionsModalDeleteTraining}>
              <button onClick={deleteCourse}>Sim, excluir</button>
              <button onClick={props.closeModal}>Não</button>
            </div>
            <div id="sucessMessage" className={styles.sucessMessage}>
                <p>Treinamento deletado com sucesso!</p>
            </div>
          </div>
          
        </Modal>
    </>
  )
}