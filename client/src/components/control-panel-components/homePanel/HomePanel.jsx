import styles from "./homePanel.module.css"

import { HiUsers } from "react-icons/hi"
import { FaBook } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { useState } from "react"

export default function HomePanel({onSubmit}){
    const [usersPage, setUsersPage] = useState('users')
    const [trainingsPage, setTrainingsPage] = useState('trainings')
    const [settingsPage, setSettingsPage] = useState('settings')

    const handlePageHomePanel = (page) =>{
        onSubmit({page})
    }

    const setPageUsers = () =>{
        setUsersPage('users')
        handlePageHomePanel(usersPage)

        let menuLabels = document.querySelectorAll("#menu ul li")
        for(let i = 0; i < menuLabels.length; i++){
            menuLabels[i].style.borderBottom = "none"
        }

        let userLabel = document.getElementById("users")
        userLabel.style.borderBottom = "2px solid #ccc"
    }

    const setPageTrainings = () =>{
        setTrainingsPage('trainings')
        handlePageHomePanel(trainingsPage)

        let menuLabels = document.querySelectorAll("#menu ul li")
        for(let i = 0; i < menuLabels.length; i++){
            menuLabels[i].style.borderBottom = "none"
        }

        let trainingLabel = document.getElementById("trainings")
        trainingLabel.style.borderBottom = "2px solid #ccc"
    }

    const setPageSettings = () =>{
        setSettingsPage('settings')
        handlePageHomePanel(settingsPage)

        let menuLabels = document.querySelectorAll("#menu ul li")
        for(let i = 0; i < menuLabels.length; i++){
            menuLabels[i].style.borderBottom = "none"
        }

        let settingsLabel = document.getElementById("settings")
        settingsLabel.style.borderBottom = "2px solid #ccc"
    }
    
    return(
        <>
        <div className={styles.homePanel}>
            <div className={styles.headerHomePanel}>
                <h2>Home</h2>
                <p>O que você quer fazer hoje?</p>
            </div>
            <div className={styles.bodyHomePanel}>
                <div onClick={setPageUsers} className={styles.boxOption}>
                    <div className={styles.iconOption}>
                        <p><HiUsers /></p>
                    </div>
                    <p>Gerenciar e criar usuários</p>
                </div>
                <div onClick={setPageTrainings} className={styles.boxOption}>
                    <div className={styles.iconOption}>
                        <p><FaBook /></p>
                    </div>
                    <p>Editar e criar treinamentos</p>
                </div>
                <div onClick={setPageSettings} className={styles.boxOption}>
                    <div className={styles.iconOption}>
                        <p><AiFillSetting /></p>
                    </div>
                    <p>Configurações de conta</p>
                </div>
            </div>
        </div>
        </>
    )
}