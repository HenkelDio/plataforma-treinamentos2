import styles from '../login.module.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function InsertEmail(props) {
  const { setEmailExists, setNewPassword } = props;

  const validationEmail = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O campo 'e-mail' é obrigatório"),
  });

  const submitEmail = (values) => {
    console.log(values)
    setEmailExists(true)
    setNewPassword(true)
  }


  return (
    <>
        <Formik
          initialValues={{}}
          validationSchema={validationEmail}
          onSubmit={submitEmail}
        >
          <Form className={styles.loginForm}>
            <label htmlFor="email" className={styles.labelEmail}>Email *</label>
            <div className={styles.inputBox}>
              <Field
                name="email"
                placeholder="exemplo@mail.com"
                className="input"
              ></Field>
              <ErrorMessage
                name="email"
                component="p"
                className={styles.errorMessage}
              />
            </div>
            <div className={styles.loginButton}>
              <button type="submit">CONTINUAR</button>
            </div>

            <div className={styles.loginOpt}>
            <a href="https://wa.me/5541996588728/">Esqueceu a senha?</a>
            <a href='https://wa.me/5541996588728?text=Tenho interesse em criar uma conta na ST Treinamentos!'>Não tem uma conta?</a>
          </div>
          </Form>
        </Formik>
      </>
      )
}