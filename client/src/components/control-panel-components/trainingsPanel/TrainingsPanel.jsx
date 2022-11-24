import styles from './trainingsPanel.module.css';
import ModalCreateTraining from './modal/Modal';
import Training from './trainingsSelect/Training';
import { useEffect, useState } from 'react';
import Axios from "axios";
import {IoIosAdd} from 'react-icons/io'

export default function TrainingsPanel(props){
    const [modalIsOpen, setIsOpen] = useState(false)
    const [listTraining, setListTraining] = useState([])

    useEffect(_=>{
        const getCourse = async _ => {
            await Axios.get("http://localhost:3001/Courses").then(res => {
                if (res) {
                    setListTraining(res.data)
                }
            })
        }
        getCourse()
    }, [])

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
                    <Training />
               </div>
            </div>
        </div>
    )
}