import Modal from 'react-modal';
import styles from '../Certificate.module.css'
import Certificate from '../../homePanel/modal/certificate-html/Certificate';
import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';

export default function ModalCertificateBox(props){

  function getCertificate(){
    htmlToImage.toJpeg(document.getElementById('certificateContainer'), { quality: 1.0 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'certificado.jpeg';
    link.href = dataUrl;
    link.click();
  });
  }


  return(
    <Modal
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.ModalCertificateBox}
    ariaHideApp={false}
    >
    
    <div className={styles.modalContainerCertificate}>
      <Certificate 
      name={JSON.parse(localStorage["user"]).name} 
      course={"algum curso"}
      hours={"8 horas"}
      />

      <div className={styles.downloadCertificate}>
        <a href="#" onClick={getCertificate} >Gerar Certificado</a>
      </div>
    </div>

    </Modal>
  )
}