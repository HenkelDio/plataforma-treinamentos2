import styles from "./modalCompany.module.css"
import { Field, Formik, Form, ErrorMessage } from 'formik';
import MaskedInput from "react-text-mask";
import SelectRegistration from "./SelectRegistrations";
import Axios from "axios"
import * as yup from 'yup'
import { useState } from "react";

const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

  const cnpjMask = [
    /[0-9]/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    ".",
    /\d/,
    /\d/,
    /\d/,
    "/",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

export default function ModalCompany() {    
    const [selected, setSelected] = useState([]);

    const validateCompany = yup.object().shape({
        name: yup.string()
        .min(6, "Campo 'nome' muito curto (min. 6)")
        .max(70, "Campo 'nome' muito longo (max. 70")
        .required("O campo 'nome' é obrigatório"),
        email: yup.string()
        .email("Digite um e-mail válido")
        .required("O campo 'e-mail' é obrigatório"),
        telephone: yup.string()
        .min(16, "Digite no máximo 16 digitos")
        .max(16, "Digite no máximo 16 digitos"),
        cnpj: yup.string()
        .min(18, "Digite no máximo 18 digitos")
        .max(18, "Digite no máximo 18 digitos")
    })

    const handleSubmit = async (values) =>{
        values.telephone = values.telephone.replace(/[ ()-]/g,'')
        values.cnpj = values.cnpj.replace(/[. -/]/g,'')
        values.selectedCourses = selected
        let route = `${require("../../../../../../defaultRoute")}/registerCompany`
        await Axios.post(route, { values }).then(res => {
            if (res.data.gotRegistred === true) {
                let alertMessage = document.getElementById("alertMessage")
                alertMessage.style.display = "none"

                let sucessMessage = document.getElementById("sucessMessage")
                sucessMessage.style.display = "block"
                setTimeout(()=>{
                    document.location.reload()
                },2000)
                
            } else {
                let alertMessage = document.getElementById("alertMessage")
                alertMessage.style.display = "block"
            }
        })
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
                    <Field name="name" placeholder="Digite o nome da empresa"></Field>
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
                <Field
                    name="cnpj">
                    {({ field }) => (
                        <MaskedInput
                        {...field}
                        mask={cnpjMask}
                        id="cnpj"
                        placeholder="CNPJ"
                        type="text"
                        />
                    )}
                    </Field>
                </div>
                <div className={styles.inputBox}>
                    <Field
                    name="telephone">
                    {({ field }) => (
                        <MaskedInput
                        {...field}
                        mask={phoneNumberMask}
                        id="telephone"
                        placeholder="Telefone"
                        type="text"
                        />
                    )}
                    </Field>
                </div>
                <div className={styles.inputBox}>
                    <Field name="contact" placeholder="Responsável"></Field>
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