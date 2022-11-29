import styles from "./login.module.css";
import { useContext } from "react";
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
    .min(6, "Campo 'senha' muito curto (min. 6)")
    .required("O campo 'senha' é obrigatório"),
});

export default function Login() {
  const { authenticated, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (values) => {
    //recebe valores do form e verifica na rota loginUser. Rsultado retorna se usuário foi authenticado e permissão
    let route  = `${require("../../defaultRoute")}/loginUser`
    await Axios.post(route, { values }).then(
      (res) => {
        if (res) {
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
            console.log("conta nao encotrada");
          }
        }

        login(values.email, values.password, res.data.name) // integração com o context
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
            initialValues={{}}
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
                ></Field>
                <ErrorMessage
                  name="password"
                  component="p"
                  className={styles.errorMessage}
                />
              </div>
              <div className={styles.loginButton}>
                <button type="submit">ENTRAR</button>
              </div>
              <div className={styles.loginOpt}>
                <a href="/">Esqueceu a senha?</a>
                <a href="/">Não tem uma conta?</a>
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
