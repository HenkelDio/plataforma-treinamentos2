import styles from './Certificate.module.css';
import { useState } from 'react';

export default function CertificatePanel({ onSubmit }){
  const [certificatePage, setCertificatePage] = useState('certificate');

  const setPageCertificate = () => {
    setCertificatePage("certificate");
    onSubmit(certificatePage);
  };

  return(
    <div className={styles.CertificatePanel}>
        <div className={styles.headerCertificatePanel}>
          <h2>Certificados:</h2>
        </div>
    </div>
  )
}