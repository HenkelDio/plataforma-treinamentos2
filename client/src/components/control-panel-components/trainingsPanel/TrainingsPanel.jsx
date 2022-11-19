import styles from './trainingsPanel.module.css';
import ModalCreateTraining from './modal/Modal';
import { useState } from 'react';
import {IoIosAdd} from 'react-icons/io'

export default function TrainingsPanel(props){
    const [modalIsOpen, setIsOpen] = useState(false)

    const closeModal = () =>{
        setIsOpen(false)
    }

    return(
        <div className={styles.trainingsPanel}>

            <ModalCreateTraining openModal={modalIsOpen} closeModal={closeModal}/>

            <div className={styles.headerTrainings}>
                <h2>Gerenciamento de Treinamentos</h2>
                <p>Adicione, altere e exclua treinamentos.</p>
            </div>
            <div className={styles.bodyTrainings}>
                <div onClick={e => setIsOpen(true)} className={styles.addTrainingContainer}>
                    <p className={styles.addIcon}><IoIosAdd/></p>
                    <p>Criar novo treinamento</p>
                </div>
            </div>
            <div className={styles.listTrainings}>
               <div className={styles.searchTraining}>
                    <input type="text" placeholder='Qual treinamento está procurando?'></input>
               </div>
               <div className={styles.list}>
                    
               </div>
            </div>
        </div>
    )
}