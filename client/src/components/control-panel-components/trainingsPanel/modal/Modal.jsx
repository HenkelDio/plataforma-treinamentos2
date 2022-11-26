
import styles from "./modal.module.css";
import Modal from 'react-modal';
import { Formik, Form, ErrorMessage, Field } from "formik";
import { IoIosArrowBack } from "react-icons/io";
import {IoIosAdd} from 'react-icons/io'
import { useState } from "react";
import Axios from "axios"


export default function ModalCreateTraining(props){

    const [courseName, setCourseName] = useState("");
    const [hoursCourse, setHoursCourse] = useState("");
    const [courseFile, setCourseFile] = useState();
    const [courseDescrit, setCourseDescrit] = useState("");

    const handlePdfActivate = () =>{
        if(courseFile){
            let labelAddFile = document.getElementById("labelAddFile")
            labelAddFile.styles.backgroundColor = "green  "
        }
    }

    const closeModal = () =>{
        props.closeModal()
    }

    async function createCourse() {
        let formData = new FormData();
        formData.append("courseName", courseName);
        formData.append("hoursCourse", hoursCourse);
        formData.append("courseFile", courseFile, courseFile.name);
        formData.append("courseDescrit", courseDescrit)
        
        let route = "http://191.101.71.229:3001/createCourse"
        await Axios.post(route, formData, {
            headers : {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            if (res) {
                console.log(res.data)
            }
        })

        closeModal()
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
                            </div>
                            <div className={styles.inputBox}>
                                <div className={styles.time}>
                                    <Field name="time" placeholder='1' onChange={e => setHoursCourse(e.target.value)} ></Field>
                                    <div className={styles.placeholderTime}>horas</div>
                                </div>
                            </div>
                            <div className={styles.fileBox}>
                                <label 
                                id="labelAddFile"
                                className={styles.labelAddFile} 
                                htmlFor="filePdf"
                                onClick={handlePdfActivate}
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
                            </div>
                            <div className={styles.inputBox}>
                                <div className={styles.contentBox}>
                                    <Field as="textarea" className={styles.content} name="content" placeholder="Digite o conteúdo aqui" onChange={e => setCourseDescrit(e.target.value)} ></Field>
                                </div>
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