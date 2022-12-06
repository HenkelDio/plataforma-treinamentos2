import styles from './trainingsPanel.module.css';
import ModalCreateTraining from './modal/Modal';
import Training from './trainingsSelect/Training';
import { useEffect, useState } from 'react';
import Axios from "axios";
import {IoIosAdd} from 'react-icons/io'

export default function TrainingsPanel(props){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [listTraining, setListTraining] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(_=>{
        const getCourses = async _ => {
            let userType = "admin"
            let route = `${require("../../../defaultRoute")}/Courses/${userType}`
            await Axios.get(route).then(res => {
                if (res) {
                    console.log(res)
                    setListTraining(res.data)
                }
            })
        }
        getCourses()
    }, [])

    // const trainingFiltered = listTraining
    //     .filter((training) => training.includes(search));

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
                    {/* <input 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    type="text" 
                    id="search"  
                    placeholder='Qual treinamento está procurando?'
                    ></input> */}
                    <h3>Treinamentos Criados</h3>
               </div>
               <div className={styles.list}>
                    {
                        listTraining.map((val)=>{
                            return <Training 
                            data={val}
                            />
                        })
                    }

                    
               </div>
            </div>
        </div>
    )
}