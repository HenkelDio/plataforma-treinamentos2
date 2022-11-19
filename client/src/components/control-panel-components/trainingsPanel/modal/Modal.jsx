import styles from "./modal.module.css";
import Modal from 'react-modal';
import { Formik, Form, ErrorMessage, Field } from "formik"
import { IoIosArrowBack } from "react-icons/io"


export default function ModalCreateTraining(props){

    const closeModal = () =>{
        props.closeModal()
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
                    <p>Preencha abaixo as informações</p>
                    <div className={styles.formAddTraining}>
                        <Formik
                        initialValues={{}}
                        >
                        <Form className={styles.form}>
                            <div className={styles.inputBox}>
                                <Field name="title" placeholder="Digite o título do treinamento"></Field>
                            </div>
                            <div className={styles.inputBox}>
                                <Field name="time" placeholder='1'></Field>
                                <div className={styles.placeholderTime}>h</div>
                            </div>
                            <div className={styles.inputBox}>
                                <Field as="textarea" name="content" placeholder="Digite o conteúdo aqui"></Field>
                            </div>
                        </Form>
                        </Formik>
                    </div>
                </div>
            </Modal>
        </div>
    )
}