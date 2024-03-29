import styles from '../login.module.css'
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import Loading from '../../../components/loading/Loading';

export default function InsertEmail(props) {
  const { setUserEmail, setEmailExists, setPasswordExists, setUserType, setNewPassword } = props;
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    Axios.post(route, data).then(res => {
      if (res) {
        if (res.data.emailExists) {
          setUserEmail(values.email);
          setEmailExists(res.data.emailExists);
          setPasswordExists(res.data.passwordExists);
          setUserType(res.data.userType);
          setNewPassword(!res.data.passwordExists)
          setLoading(false)
          let alertMessage = document.getElementById("alertMessage")
          alertMessage.style.display = "none";
          return;
        } else {
          let alertMessage = document.getElementById("alertMessage")
          alertMessage.style.display = "block";
          setLoading(false)
          return;
        }

      }
    })
  }

  return (
    <>
      {
        (loading) &&
        <Loading />
      }


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
            <a href='/pages/loja'>Não tem uma conta?</a>
          </div>
        </Form>
      </Formik>
    </>
  )
}