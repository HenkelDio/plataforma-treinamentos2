import styles from "./login.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import { BsFileLockFill } from "react-icons/bs"


const validationEmail = yup.object().shape({
    email: yup.string()
    .email("Digite um e-mail válido")
    .required("O campo 'e-mail' é obrigatório"),
    password: yup.string()
    .min(6, "Campo 'senha' muito curto (min. 6)")
    .required("O campo 'senha' é obrigatório")
})

const handleLogin = (values) =>{
    console.log(values)
}


export default function Login(){
    return(
        <div className={styles.loginContainer}>
            <div className={styles.innerLoginContainer}>
                <div className={styles.loginHeader}>
                    <div className={styles.icon}>
                        <span><BsFileLockFill/></span>
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
                            className="input"></Field>
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
                            className="input"></Field>
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
    )
}