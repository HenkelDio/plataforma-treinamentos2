import styles from './certificate.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function Certificate(props) {
  const { certificateInformation, setCertificateInformation } = props;

  function setCertInfo(e, key) {
    const prev = certificateInformation
    prev[key] = e;
    setCertificateInformation(prev)
  }

  const validateCertificate = yup.object().shape({
    validade: yup.string()
    .required("O campo 'validade' é obrigatório")
    .matches(
      /^([0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '])+$/u,
      'Não é permitido texto')
  })

  return (
    <>
      <div className={styles.certificate}>
        <div className={styles.formCertificate}>
          <Formik
            initialValues={{}}
            validationSchema={validateCertificate}
          >
            <Form>
              <div className={styles.inputBox}>
                <label htmlFor="norma">Norma Regulamentadora: </label>
                <Field name="norma" placeholder="ex. Norma Regulamentadora 35 (NR 35), da Portaria SIT Nº 313, de 23/03/2012 do Ministério do Trabalho" onChange={e => setCertInfo(e.target.value, "norm")}></Field>
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="conteudoTeorico">Conteúdo Teórico:</label>
                <Field name="conteudoTeorico" placeholder="ex. 1) Normas, 2) Analise de Risco" onChange={e => setCertInfo(e.target.value, "teoricContent")}></Field>
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="conteudoPratico">Conteúdo Prático:</label>
                <Field name="conteudoPratico" placeholder="ex. 1) Condutas em situação de emergência" onChange={e => setCertInfo(e.target.value,"praticalContent")}></Field>
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="validade">Validade de:</label>
                <Field name="validade" placeholder="ex. 2" onChange={e => setCertInfo(e.target.value, "certificateExpiration")}></Field>
                <ErrorMessage 
                component="p"
                name="validade"
                className={styles.errorMessage}
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}