import styles from '../Certificate.module.css'
import { TbCertificate } from 'react-icons/tb'
import ModalCertificateBox from './ModalCertificateBox'
import { useState } from 'react';

export default function CertificateBox(props){
  const { certificateCourse } = props
  const [isOpen, setIsOpen] = useState(false);
  
  
  const openModal = () =>{
    setIsOpen(true)
  }

  const closeModal = () =>{
    setIsOpen(false)
  }

  return(
    <>
      <ModalCertificateBox openModal={isOpen} closeModal={closeModal} data={certificateCourse}></ModalCertificateBox>

      <div onClick={openModal} className={styles.CertificateBox}>
        <div className={styles.headerCertificateBox}>
          <p><TbCertificate /></p>
        </div>
        <div className={styles.bodyCertificateBox}>
          <p><b>Treinamento NR 35</b></p>
          <p>Duração: {certificateCourse.course_hours} Horas</p>
        </div>
      </div>
    </>
  )
}