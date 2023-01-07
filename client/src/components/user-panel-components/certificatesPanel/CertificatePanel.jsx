import styles from './Certificate.module.css';
import { useState, useEffect } from 'react';
import CertificateBox from './certificate-box/CertificateBox';
import Axios from "axios";

export default function CertificatePanel({ onSubmit }){
  const [certificatePage, setCertificatePage] = useState('certificate');
  const [certificatesCourses, setCertificatesCourses] = useState([])

  useEffect(_ => {
    const getCompleteCourses = async _ => {
      Axios.get(`${require("../../../defaultRoute")}/getCompleteCourses/${sessionStorage["user"].id}`).then( res => {
        console.log(res)
      })
    }
    getCompleteCourses();

  }, [])

  const setPageCertificate = () => {
    setCertificatePage("certificate");
    onSubmit(certificatePage);
  };

  return(
    <>
      <div className={styles.CertificatePanel}>
          <div className={styles.headerCertificatePanel}>
            <h2>Certificados:</h2>
          </div>
          <div className={styles.bodyCertificatePanel}>
            <CertificateBox />
            <CertificateBox />
            <CertificateBox />
            <CertificateBox />
            <CertificateBox />
          </div>
      </div>
    </>
  )
}