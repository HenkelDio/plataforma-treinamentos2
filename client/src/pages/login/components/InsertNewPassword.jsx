import styles from '../login.module.css'
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

export default function InsertNewPassword() {
  const [showPassword, setShowPassword] = useState("password")

  const showPasswordHandle = () =>{
    let showPass = document.getElementById("showPass")
    if(showPass.checked){
      setShowPassword("text")
    } else {
      setShowPassword("password")
    }
  }

  const validationPassword = yup.object().shape({
    password: yup
      .string()
      .required("O campo 'senha' é obrigatório"),
  });

  const submitPassword = (values) => {
    const route = `${require("../../../defaultRoute")}/redefinePassword`
    const data = {
      
    }
  }


  return (
    <>
      <Formik
        initialValues={{
          password: ""
        }}
        validationSchema={validationPassword}
        onSubmit={submitPassword}
      >
        <Form className={styles.loginForm}>
          <div className={styles.inputBox}>
            <Field
              name="password"
              placeholder="Criar nova senha *"
              className="input"
              type={showPassword}
            ></Field>
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
              className={styles.errorMessage}
            />
          </div>
          <div className={styles.loginButton}>
            <button type="submit">ENTRAR</button>
          </div>
          </Form>
          </Formik>
        </>
        )
}