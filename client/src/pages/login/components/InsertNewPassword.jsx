import styles from '../login.module.css'
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function InsertNewPassword() {
  const [showPassword, setShowPassword] = useState("password")

  const showPasswordHandle = () => {
    let showPass = document.getElementById("showPass")
    if (showPass.checked) {
      setShowPassword("text")
    } else {
      setShowPassword("password")
    }
  }

  const validationPassword = yup.object().shape({
    password: yup
      .string()
      .required("O campo 'senha' é obrigatório")
      .min(6, "O campo 'senha' deve ter no mínimo 6 caracteres"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
  });

  const submitPassword = (values) => {
    console.log(values)
  }


  return (
    <>
      <Formik
        initialValues={{}}
        validationSchema={validationPassword}
        onSubmit={submitPassword}
      >
        <Form className={styles.loginForm}>
        <label htmlFor="email">Criar nova senha</label>
          <div className={styles.inputBox}>
            <Field
              name="password"
              className="input"
              type={showPassword}
            ></Field>
          </div>

          <label htmlFor="email">Confirme a senha</label>
          <div className={styles.inputBox}>
            <Field
              name="confirmPassword"
              className="input"
              type={showPassword}
            ></Field>
          </div>
           
            <div className={styles.showPassword}>
              <input
                id="showPass"
                className={styles.showPass}
                type="checkbox"
                onClick={showPasswordHandle}
              ></input>
              <label htmlFor="showPass">mostrar senha</label>
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className={styles.errorMessageNewPassword}
            />
             <ErrorMessage
              name="confirmPassword"
              component="p"
              className={styles.errorMessageNewPassword}
            />
            
           
          
          <div className={styles.loginButton}>
            <button type="submit">CRIAR SENHA</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}