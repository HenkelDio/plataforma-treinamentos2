import styles from "./modalUser.module.css"
import Axios from "axios"
import SelectCompany from "./selectCompany";
import SelectRegistration from "./SelectRegistrations";
import { useState } from "react";
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup'

export default function ModalUser() {    

    const [userCompanyId, setUserCompanyId] = useState(1);
    const [selected, setSelected] = useState([]);

    const validateUser = yup.object().shape({
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

    const handleSubmit = async (values) =>{
        console.log(values, selected)
        // values.companyId = userCompanyId;
        // let route = `${require("../../../../../../defaultRoute")}/registerUser`
        // await Axios.post(route, { values }).then(res => {
        //     console.log(res.data)
        //     if (res.data.gotRegistred === true) {
        //         let alertMessage = document.getElementById("alertMessage")
        //         alertMessage.style.display = "none"

        //         let sucessMessage = document.getElementById("sucessMessage")
        //         sucessMessage.style.display = "block"
        //         setTimeout(()=>{
        //             document.location.reload()
        //         },2000)
                
        //     } else {
        //         let alertMessage = document.getElementById("alertMessage")
        //         alertMessage.style.display = "block"
        //     }
        // })
    }

    return (
        <div className={styles.ModalUser}>
            <h2>Novo usuário</h2>
            <p>Preencha os campos abaixo:</p>
            <Formik
            initialValues={{}}
            validationSchema={validateUser}
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
                    <Field name="cpf" placeholder="Digite o CPF"></Field>
                </div>
                <div className={styles.inputBox}>
                    <Field name="telephone" placeholder="Telefone"></Field>
                </div>
                <div className={styles.inputBox}>
                    <SelectCompany setUserCompanyId={setUserCompanyId} />
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
                <div className={styles.inputBox}>
                    <SelectRegistration selected={selected} setSelected={setSelected} />
                </div>
                <div id="sucessMessage" className={styles.sucessMessage}>
                    <p>Usuário adicionado com sucesso!</p>
                </div>
                <div id="alertMessage" className={styles.alertMessage}>
                    <p>Esse usuário já existe!</p>
                </div>
                <button type='submit' className={styles.createButton}>Criar</button>
            </Form>
            </Formik>
        </div>

    )
}