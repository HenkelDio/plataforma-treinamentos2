import styles from "./contact.module.css";
import HeaderPages from "../components/home-pages/HeaderPages";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Footer from "../components/footer/Footer";

const textareaStyle = {
  width: "100%",
  height: "200px",
  paddingLeft: "10px",
  paddingTop: "10px",
  border: "2px solid #ccc",
  borderRadius: "20px",
  fontSize: "1.2rem"
}

const sendMessage = (values) => {
  const {email, subject, content} = values;

  let message = '*Email do Remetente:* ' + '\r\n\r\n' + email + '\r\n\r\n' + '*Assunto:* ' + '\r\n\r\n' + subject + '\r\n\r\n' + '*Conteúdo:* ' + '\r\n\r\n' + content;
  let urlMessage = window.encodeURIComponent(message);


  window.open(`https://wa.me/5541998093723?text=${urlMessage}`);
}

export default function ContactPage(){
  return(
    <>
    <HeaderPages />

    <div className={styles.contactPage}>
      <div className={styles.title}>
        <h1>Entre em Contato</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.information}>
          <div className={styles.contactBox}>
            <p><b>Telefone</b></p>
            <p>(41) 3343-8043</p>
          </div>
          <div className={styles.contactBox}>
            <p><b>Whatsapp</b></p>
            <p>(41) 99809-3723</p>
          </div>
          <div className={styles.contactBox}>
            <p><b>E-mail</b></p>
            <p>souzatreinamentos@hotmail.com.br</p>
          </div>
        </div>

        <div className={styles.formContact}>
         <Formik
         initialValues={{}}
         onSubmit={sendMessage}
         >
          <Form className={styles.form}>
            <div className={styles.inputBox}>
              <Field name="email" className={styles.email} placeholder="Seu e-mail"></Field>
            </div>
            <div className={styles.inputBox}>
              <Field name="subject" className={styles.subject} placeholder="Assunto"></Field>
            </div>
            <div className={styles.inputBox}>
              <Field name="content" as="textarea" defaultValue="" style={textareaStyle} placeholder="O que você quer nos perguntar?"></Field>
            </div>

            <button className={styles.sendEmail} type="submit">Enviar</button>
          </Form>
         </Formik>
        </div>
      </div>
    </div>

    <Footer />

    </>
  )
}