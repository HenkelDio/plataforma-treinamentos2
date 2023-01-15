import styles from '../login.module.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function InsertEmail(props) {
  const { setEmailExists, setPasswordExists } = props;

  const validationEmail = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O campo 'e-mail' é obrigatório"),
  });

  const submitEmail = (values) => {
    console.log(values)
    setEmailExists(true)
    setPasswordExists(true)
  }


  return (
    <>
        <Formik
          initialValues={{}}
          validationSchema={validationEmail}
          onSubmit={submitEmail}
        >
          <Form className={styles.loginForm}>
            <div className={styles.inputBox}>
              <Field
                name="email"
                placeholder="E-mail *"
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
          </Form>
        </Formik>
      </>
      )
}