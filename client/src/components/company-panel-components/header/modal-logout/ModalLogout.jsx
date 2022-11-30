import styles from "./modalLogout.module.css";
import Modal from "react-modal";
import Axios from "axios";
import { useContext } from 'react';
import { AuthContext } from "../../../../contexts/AuthContext";

export default function ModalLogout(props) {

  const { logoutUser } = useContext(AuthContext)

  const logout = () =>{
    logoutUser()
  }


  return(
    <>
    <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.ModalLogout}
        ariaHideApp={false}>

          <div className={styles.containerModalLogout}>
            <h2>Tem certeza que gostaria de fazer logoff?</h2>
            <div className={styles.optionsModalLogout}>
              <button onClick={logout}>Sim, sair</button>
              <button onClick={props.closeModal}>Não</button>
            </div>
          </div>
          
        </Modal>
    </>
  )
}