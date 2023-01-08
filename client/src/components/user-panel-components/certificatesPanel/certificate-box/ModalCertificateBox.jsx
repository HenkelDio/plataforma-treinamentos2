import Modal from 'react-modal';
import styles from '../Certificate.module.css'
import Certificate from '../../homePanel/modal/certificate-html/Certificate';
import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';
import MyDocument from '../../homePanel/modal/certificate-html/CertificatePdf';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function ModalCertificateBox(props){

  console.log(props)

  // function getCertificate(){
  //   htmlToImage.toJpeg(document.getElementById('certificateContainer'), { quality: 1.0 })
  // .then(function (dataUrl) {
  //   var link = document.createElement('a');
  //   link.download = 'certificado.jpeg';
  //   link.href = dataUrl;
  //   link.click();
  // });
  // }


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
    

        {/* <Certificate /> */}

      <div className={styles.downloadCertificate}>

        <PDFViewer className={styles.pdfViewerContainer}>
          <MyDocument/>
        </PDFViewer>

          <a href="#"><PDFDownloadLink document={<MyDocument />} filename="CERTIFICADO">
            {({loading}) => (loading ? <button>Loading Document...</button> : <button className={styles.downloadButton}>Download</button> )}
          </PDFDownloadLink></a>
      </div>

      <div className={styles.closeModal}>
        <a href="#" onClick={props.closeModal} >Fechar</a>
      </div>
    </div>

    </Modal>
  )
}