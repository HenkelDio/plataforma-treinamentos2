import styles from '../login.module.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

export default function InsertEmail(props) {
  const { setEmailExists, setPasswordExists, setUserType} = props;

  const validationEmail = yup.object().shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O campo 'e-mail' é obrigatório"),
  });

  const submitEmail = (values) => {
    const route = `${require("../../../defaultRoute")}/loginEmailUser`;
    const data = {
      userEmail: values.email
    }

    Axios.post(route, data).then(res => {
      if (res) {
        console.log(res)
      }
    })
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