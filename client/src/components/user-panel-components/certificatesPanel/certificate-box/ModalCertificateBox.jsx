import Modal from 'react-modal';
import styles from '../Certificate.module.css'
import Certificate from '../../homePanel/modal/certificate-html/Certificate';
import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';
import CertificatePdf from '../../homePanel/modal/certificate-html/CertificatePdf';
import { PDFViewer, PDFDownloadLink, pdf } from '@react-pdf/renderer';
import FileSaver from "file-saver"


export default function ModalCertificateBox(props){

  const { data } = props

  const generatePdfDocument = async (data, fileName) =>{
    const blob = await pdf(
      <CertificatePdf data={data}/>
    ).toBlob();
    FileSaver.saveAs(blob, fileName);
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
    

        {/* <Certificate /> */}

      <div className={styles.downloadCertificate}>

        
          <h1>{data.courseInformation.course_title}</h1>

          <button 
          className={styles.downloadButton} 
          onClick={()=> generatePdfDocument(data, 'certificado')}
          >DOWNLOAD DO CERTIFICADO</button>
{/* 
          <a href="#"><PDFDownloadLink document={<CertificatePdf />} filename="CERTIFICADO">
            {({loading}) => (loading ? <button>Loading Document...</button> : <button className={styles.downloadButton}>Download</button> )}
          </PDFDownloadLink></a> */}
      </div>

      <div className={styles.closeModal}>
        <a href="#" onClick={props.closeModal} >Fechar</a>
      </div>
    </div>

    </Modal>
  )
}