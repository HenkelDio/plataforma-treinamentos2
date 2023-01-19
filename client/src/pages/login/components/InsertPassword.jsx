import styles from '../login.module.css'
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { IoArrowBackOutline } from 'react-icons/io5'
import { RiErrorWarningLine } from "react-icons/ri"

export default function InsertPassword(props) {

  const { userEmail, userType, setAuthorized, setUserInfo, setEmailExists, setPasswordExists} = props
  const [showPassword, setShowPassword] = useState("password")
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    const route = `${require("../../../defaultRoute")}/loginPasswordUser`
    const data = {
      userEmail: userEmail,
      userPassword: values.password,
      userType: userType,
    }

    Axios.post(route, data).then(res => {
      if (res) {
        if(res.data.authorized){
          setAuthorized(res.data.authorized)
          setUserInfo(res.data.userInfo)
          setLoading(false)
        } else {
          let alertMessage = document.getElementById("alertMessagePassword")
          alertMessage.style.display = "block";
          setLoading(false)
          return;
        }
       
      }
    })
  }

  const backEmail = () => {
    setEmailExists(false)
    setPasswordExists(false)
  }

  const forgotPassword = () => {
    let btnForgotPass = document.getElementById('btnForgotPass')
    btnForgotPass.style.display = "none"
    let forgotPassword = document.getElementById('forgotPassword')
    forgotPassword.style.display = "flex"
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
          <label htmlFor="password">Senha *</label>
          <div className={styles.inputBox}>

          <div 
          onClick={backEmail}
          className={styles.back}>
            <p><IoArrowBackOutline/></p>
          </div>

            <Field
              name="password"
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

          <div className={styles.loginOpt}>
            <a id="btnForgotPass" href="#" onClick={forgotPassword}>Esqueceu a senha?</a>
          </div>

          <div id="forgotPassword"  className={styles.forgotPassword}>
            <p><RiErrorWarningLine /></p>
            <p>Caso tenha esquecido a senha, entre em contato com sua empresa ou responsável.</p>
          </div>

          <div className={styles.loginButton}>
            <button 
            type="submit"
            disabled={loading}
            >{loading? "Entrando..." : "ENTRAR"}</button>
          </div>



          </Form>
          </Formik>
        </>
        )
}