import Modal from 'react-modal';
import styles from "./modal.module.css";
import FramePdf from './pdf/FramePdf';
import ModalConclusion from './confirm-conclusion-modal/ModalConclusion';
import { useState, useEffect } from 'react';
import Axios from "axios";

export default function ModalTraining(props){
  const [isOpen, setIsOpen] = useState(false);
  const [pdfInfo, setPdfInfo] = useState(null);

  useEffect(_ => {
    const getCourse = async _ => {
      let route = `${require("../../../../defaultRoute")}/getCourse/${props.data.data.course_id}`;
      await Axios.get(route).then(res => {
        setPdfInfo(res.data)
      })
    }
    getCourse()
  }, []);

  const openModal = () =>{
    setIsOpen(true)
  }

  const closeModal = () =>{
    setIsOpen(false)
  }
  
  function DownloadPdf() {
    return (
      pdfInfo ? <a href={`https://souzatreinamentosst.com.br:4000/${pdfInfo.courseDir}/${pdfInfo.coursePdf}`}>Ou faça download PDF</a> : <></>
    )
  }
  
  return(
    <Modal 
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.modal}
    ariaHideApp={false}
    id="ModalTrainingUser"
    >

      <ModalConclusion openModal={isOpen} closeModal={closeModal} data={props}/>

      <div className={styles.modalTraining}>
        <div className={styles.headerModal}>
          <h1>{props.data.data.course_title}</h1>
        </div>
        <div className={styles.bodyModal}>
          <div className={styles.pdf}>
            <FramePdf pdfInfo={pdfInfo} />
          </div>
          <DownloadPdf />
          <div className={styles.content}>
            <p>
              {props.data.data.content}
            </p>
          </div>
          <div className={styles.features}>
            <button onClick={openModal}>Concluir Treinamento</button>
            <button onClick={props.closeModal}>Fechar</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}