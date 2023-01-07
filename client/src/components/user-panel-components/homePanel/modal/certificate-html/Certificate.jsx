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
          <h2>TREINAMENTO NR 35 - Trabalho em Altura com Caminhões</h2>
          <div className={styles.text}>
            <p>
              Certifica que, Willian Henkel de Deus, CPF: 124.400.389-11. Participou do treinamento de Trabalho em Altura com Caminhões, de acordo com a Norma Regulamentadora 35 (NR 35), da Portaria SIT Nº 313, de 23/03/2012 do Ministério do Trabalho, com, carga horária de 8 horas, sendo 4 horas com aulas téoricas e 4 horas com aulas práticas.
            </p>
          </div>
          
          <div className={styles.containerContent}>
            <div className={styles.teoricalContent}>
              <p><b>I) Conteúdo progrático teórico</b></p>
              <div className={styles.info}>
                <p>1) Normas e Regulamentos aplicáveis ao trabalho em altura; 2) Análise de risco e condições impeditivas; 3) Riscos pontenciais inerentes ao trabalho em altura e medidas de prevenção e controle; 4) Sistemas, equipamentos e procedimentos de proteção coletiva (EPC's); 5) Equipamento de proteção individual (EPI's), para trabalho em altura: seleção, inspeção, conservação e limitação de uso; 6) Acidentes típicos em realiação de trabalho em altura;</p>
              </div>
            </div>
            <div className={styles.praticalContent}>
              <p><b>II) Conteúdo progrático prático</b></p>
              <div className={styles.info}>
                <p>1) Condutas em situação de emergência, incluindo noções de técnicas de resgate e primeiros socorros.</p>
              </div>
            </div>
            <div className={styles.responsavel}>
              <p><b>Responsável Técnico</b></p>
              <div className={styles.first}>
                <p>RENY DE SOUZA BUENO</p>
                <p>REG. MTE. - 6255/SC</p>
                <p>CPF: 849.139.409-53</p>
                <p><b>CAPACITAÇÃO DO INSTRUTOR</b></p>
                <ul>
                  <li>- TÉCNICO DE SEGURANÇA DO TRABALHO</li>
                  <li>- BOMBEIRO PROFISSIONAL CIVIL 300H</li>
                  <li>- EMERGENCIA COM INFLAMAVEIS 60H</li>
                  <li>- SUPERVISOR TRAB. EM ALTURA 40H</li>
                  <li>- AUX. ENF MILITAR - HGEC - CURITIBA 600H</li>
                </ul>
              </div>
              <div className={styles.first}>
                <p>ROSANE RODRIGUES TAVARES</p>
                <p>REG. MTE. - 14412/PR</p>
                <p>CPF: 620.692.339-87</p>
                <p><b>CAPACITAÇÃO DO INSTRUTOR</b></p>
                <ul>
                  <li>- TÉCNICO DE SEGURANÇA DO TRABALHO</li>
                  <li>- SUPERVISOR TRAB. EM ALTURA 40H</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.expiration}>
            <h2>Souza Segurança do trabalho</h2>
            <p><b>VALIDADE ATÉ 06/11/2023</b></p>
          </div>

          <div className={styles.signature}>
            <p id="today"></p>
            <div className={styles.signatureContainer}>
              <p>Reny de Souza - TST - BPC - INST. NR20<br /> Reg. MTE 6255/SC</p>
              <p>Thomas Bernardo <br /> Participante</p>
            </div>
            
          </div>
        </div>

        <div className={styles.footer}>
          <p>ST CAPACITAÇÃO EM SEGURANÇA DO TRABALHO</p>
          <p>CENTRO DE TREINAMENTO</p>
          <p>NR 12, 18, 20, 33, 35</p>
          <p>CIPA - BRIG. COMB. INCÊNDIO</p>
          <p>PPRA - PCMSO</p>

          <hr />

          <p>RENY DE SOUZA BUENO - ME</p>
          <p>CNPJ: 19.003.553/0001-26</p>
          <p>www.souzatreinamentosst.com.br</p>

        </div>

      </div>
    </div>
  )
}