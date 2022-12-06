import styles from "./modal.module.css";
import Modal from 'react-modal';
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { IoIosArrowBack } from "react-icons/io";
import {IoIosAdd} from 'react-icons/io'
import { useState } from "react";
import Axios from "axios"


export default function ModalCreateTraining(props){

    const [courseName, setCourseName] = useState("");
    const [hoursCourse, setHoursCourse] = useState("");
    const [courseFile, setCourseFile] = useState();
    const [courseDescrit, setCourseDescrit] = useState("");

    const closeModal = () =>{
        props.closeModal()
    }

    const fileSelected = () =>{
        let fileReceived = document.getElementById("fileReceived")
        let labelAddFile = document.getElementById('labelAddFile')
        labelAddFile.style.backgroundColor = "rgb(81, 176, 80)";
        fileReceived.innerText = "ARQUIVO ADICIONADO"
    }

    async function createCourse() {
        let formData = new FormData();
        formData.append("courseName", courseName);
        formData.append("hoursCourse", hoursCourse);
        formData.append("courseFile", courseFile, courseFile.name);
        formData.append("courseDescrit", courseDescrit)
        
        let route = `${require("../../../../defaultRoute")}/createCourse`
        await Axios.post(route, formData, {
            headers : {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {

            if (res.data.registeredCourse === true) {
                let sucessMessage = document.getElementById("sucessMessage")
                sucessMessage.style.display = "block";
                setTimeout(()=>{
                    document.location.reload()
                },2000)
            } else {
                console.log(res.data.registeredCourse)
                let alertMessage = document.getElementById("alertMessage")
                alertMessage.style.display = "block"
            }
        })

        
    }


    return(
        <div className={styles.modalCreateTraining}>
            <Modal
            isOpen={props.openModal}
            onRequestClose={closeModal}
            contentLabel="Exemplo"
            overlayClassName={styles.modalOverlay}
            className={styles.modal}
            ariaHideApp={false}
            >
            <div className={styles.headerModal}>
                    
                    <div onClick={closeModal} className={styles.closeModal}>
                        <IoIosArrowBack />
                    </div>

                    <h1 id="pageTitle">Criar novo treinamento</h1>
                </div>
                <div id="bodyModal" className={styles.bodyModal}>
                    <p>Preencha as informações abaixo</p>
                    <div className={styles.formAddTraining}>
                        <Formik
                        initialValues={{}}
                        >
                        <Form className={styles.form}>
                            <div className={styles.inputBox}>
                                <Field name="title" className={styles.title} placeholder="Digite o título do treinamento" onChange={e => setCourseName(e.target.value)} ></Field>
                                <ErrorMessage
                                name="title"
                                component="p"
                                className={styles.errorMessage}
                                />
                            </div>
                            <div className={styles.inputBox}>
                                <div className={styles.time}>
                                    <Field name="time" placeholder='1' onChange={e => setHoursCourse(e.target.value)} ></Field>
                                    <div className={styles.placeholderTime}>horas</div>
                                </div>
                            </div>
                            <div id="fileBox" className={styles.fileBox}>
                                <label 
                                id="labelAddFile"
                                className={styles.labelAddFile} 
                                htmlFor="filePdf"
                                onChange={fileSelected}
                                >
                                    <IoIosAdd />
                                    Adicionar PDF
                                    <input 
                                    type="file" 
                                    id="filePdf" 
                                    className={styles.filePdf} 
                                    accept=".pdf" 
                                    onChange={e => setCourseFile(e.target.files[0])}/>
                                </label>
                                <p id="fileReceived"><b></b></p>
                            </div>
                            <div className={styles.inputBox}>
                                <div className={styles.contentBox}>
                                    <Field as="textarea" className={styles.content} name="content" placeholder="Digite o conteúdo aqui" onChange={e => setCourseDescrit(e.target.value)} ></Field>
                                </div>
                            </div>
                            <div id="sucessMessage" className={styles.sucessMessage}>
                                <p>Treinamento adicionado com sucesso!</p>
                            </div>
                            <div id="alertMessage" className={styles.alertMessage}>
                                <p>Esse treinamento já está cadastrado!</p>
                            </div>
                            <input type="button" value="Salvar" className={styles.saveBtn} onClick={createCourse} ></input>
                        </Form>
                        </Formik>
                    </div>
                </div>
            </Modal>
        </div>
    )
}