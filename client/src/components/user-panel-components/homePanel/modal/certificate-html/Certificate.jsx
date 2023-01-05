import styles from '../questions/modalQuestions.module.css'

export default function Certificate(props) {
  return (
    <div id='certificate' className={styles.certificate}>

      <div className={styles.background}>
        <div className={styles.asset1}></div>
        <div className={styles.asset2}></div>
        <div className={styles.asset3}></div>
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
        </div>
      </div>
    </div>
  )
}