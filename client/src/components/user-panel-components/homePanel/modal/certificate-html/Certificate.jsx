import styles from '../questions/modalQuestions.module.css'
import { useEffect, useState } from 'react';
import signature from '../../../../../assets/assinatura.png'

export default function Certificate(props) {

  useEffect(()=> {
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let date = new Date();
    let day = date.getDate();
    let mouth = months[date.getMonth()];
    let year = date.getFullYear();
    const fullDate = day + ' de ' + mouth + ' de ' + year;
    
    let today = document.getElementById('today');
    today.innerHTML = `<b>${fullDate}</b>`;
  },[])
  
  

  
  return (
    <div id='certificateContainer' className={styles.certificate}>

      <div className={styles.background}>
        <div className={styles.asset1}></div>
        <div className={styles.asset2}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Certificado</h1>
        </div>
        <div className={styles.content}>
          <h2>{props.course}</h2>
          <p>
            Certifica que, {props.name}, CPF: 000.000.000.00. Participou do treinamento de {props.course}, de acordo com a Norma Regulamentadora 35 (NR 35), da Portaria SIT Nº 313, de 23/03/2012 do Ministério do Trabalho, com, carga horária de {props.hours} horas.
          </p>
          <p id="today"></p>
          <img src={signature} alt="signure"></img>
        </div>
      </div>
    </div>
  )
}