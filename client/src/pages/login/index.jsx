import styles from "./login.module.css";
import { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { BsFileLockFill } from "react-icons/bs";
import Axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const validationEmail = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O campo 'e-mail' é obrigatório"),
  password: yup
    .string()
    .required("O campo 'senha' é obrigatório"),
});

export default function Login() {
  const { authenticated, login, setPermission } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState("password")

  const navigate = useNavigate();

  const showPasswordHandle = () =>{
    let showPass = document.getElementById("showPass")
    if(showPass.checked){
      setShowPassword("text")
    } else {
      setShowPassword("password")
    }
    
  }

  const handleLogin = async (values) => {
    //recebe valores do form e verifica na rota loginUser. Rsultado retorna se usuário foi authenticado e permissão
    let route  = `${require("../../defaultRoute")}/loginUser`
    await Axios.post(route, { values }).then(
      (res) => {
        if (res) {
          console.log(res.data)
          if (res.data.permission === "company") {
            console.log(res.data.permission);
            navigate("/painel-empresa");
          } else if (res.data.permission === "admin") {
            console.log(res.data);
            navigate("/painel");
          } else if (res.data.permission === "user") {
            console.log(res.data.permission);
            navigate("/painel-usuario");
          } else {
            let alertMessage = document.getElementById("alertMessage")
            alertMessage.style.display = "block";
            return;
          }
        }

        login(res.data.id, values.email, values.password, res.data.name, res.data.permission) // integração com o context
      }
    );
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.innerLoginContainer}>
        <div className={styles.loginHeader}>
          <div className={styles.icon}>
            <span>
              <BsFileLockFill />
            </span>
          </div>
          <div className={styles.label}>
            <p>Login</p>
          </div>
        </div>
        <div className={styles.loginBody}>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={validationEmail}
            onSubmit={handleLogin}
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
              <div className={styles.inputBox}>
                <Field
                  name="password"
                  placeholder="Senha *"
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
              <div id="alertMessage" className={styles.alertMessage}>
                  <p>E-mail ou senha incorreta</p>
              </div>
              <div className={styles.loginOpt}>
                <a href="https://wa.me/5541996588728/">Esqueceu a senha?</a>
                <a href='https://wa.me/5541996588728?text=Tenho interesse em criar uma conta na ST Treinamentos!'>Não tem uma conta?</a>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="loginFooter">
          <p>Copyright © Souza Treinamentos 2022.</p>
        </div>
      </div>
    </div>
  );
}
