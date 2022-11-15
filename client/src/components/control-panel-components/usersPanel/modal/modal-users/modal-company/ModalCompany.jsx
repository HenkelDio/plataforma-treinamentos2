import styles from "./modalCompany.module.css"
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'

export default function modalCompany() {    

    const validateCompany = yup.object().shape({
        name: yup.string()
        .min(6, "Campo 'nome' muito curto (min. 6)")
        .max(70, "Campo 'nome' muito longo (max. 70")
        .required("O campo 'nome' é obrigatório"),
        email: yup.string()
        .email("Digite um e-mail válido")
        .required("O campo 'e-mail' é obrigatório"),
        password: yup.string()
        .min(6, "Campo 'senha' muito curto (min. 6)")
        .required("O campo 'senha' é obrigatório"),
        confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
        .required("O campo 'confirme a senha é obrigatório")
    })

    const handleSubmit = (values) =>{

        console.log(values)

        let sucessMessage = document.getElementById("sucessMessage")
        sucessMessage.style.display = "block"
    }

    return (
        <div className={styles.ModalCompany}>
            <h2>Novo usuário Empresa</h2>
            <p>Preencha os campos abaixo:</p>
            <Formik
            initialValues={{}}
            validationSchema={validateCompany}
            onSubmit={handleSubmit}
            >
            <Form className={styles.form}>
                <div className={styles.inputBox}>
                    <Field name="name" placeholder="Digite o nome"></Field>
                    <ErrorMessage 
                    name='name'
                    component='p'
                    className={styles.errorMessage}
                    />
                </div>
                <div className={styles.inputBox}>
                    <Field name="email" placeholder="Digite o email"></Field>
                    <ErrorMessage 
                    name='email'
                    component='p'
                    className={styles.errorMessage}
                    />
                </div>
                <div className={styles.inputBox}>
                    <Field name="cnpj" placeholder="Digite o CNPJ"></Field>
                </div>
                <div className={styles.inputBox}>
                    <Field name="telephone" placeholder="Telefone"></Field>
                </div>
                <div className={styles.inputBox}>
                    <Field name="contact" placeholder="Responsável"></Field>
                </div>
                <div className={styles.inputBox}>
                    <Field name="password" placeholder="Crie uma senha"></Field>
                    <ErrorMessage 
                    name='password'
                    component='p'
                    className={styles.errorMessage}
                    />
                </div>
                <div className={styles.inputBox}>
                    <Field name="confirmPassword" placeholder="Confirme a senha"></Field>
                    <ErrorMessage 
                    name='confirmPassword'
                    component='p'
                    className={styles.errorMessage}
                    />
                </div>
                <div id="sucessMessage" className={styles.sucessMessage}>
                    <p>Usuário adicionado com sucesso!</p>
                </div>
                <button type='submit' className={styles.createButton}>Criar</button>
            </Form>
            </Formik>
        </div>

    )
}