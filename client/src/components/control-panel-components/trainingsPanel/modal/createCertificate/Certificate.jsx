import styles from './certificate.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Certificate(){
  return(
    <>
    <div className={styles.certificate}>
      <div className={styles.formCertificate}>
        <Formik
        initialValues={{}}
        >
          <Form>
            <div className={styles.inputBox}>
              <label htmlFor="norma">Norma Regulamentadora: </label>
              <Field name="norma" placeholder="ex. Norma Regulamentadora 35 (NR 35), da Portaria SIT Nº 313, de 23/03/2012 do Ministério do Trabalho"></Field>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="conteudoTeorico">Conteúdo Teórico:</label>
              <Field name="conteudoTeorico" placeholder="ex. 1) Normas, 2) Analise de Risco"></Field>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="conteudoPratico">Conteúdo Prático:</label>
              <Field name="conteudoPratico" placeholder="ex. 1) Condutas em situação de emergência"></Field>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
    </>
  )
}