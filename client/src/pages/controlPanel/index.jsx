import Header from "../../components/header/Header"
import UsersPanel from "../../components/control-panel-components/usersPanel/UsersPanel"
import HomePanel from "../../components/control-panel-components/homePanel/HomePanel"
import TrainingsPanel from "../../components/control-panel-components/trainingsPanel/TrainingsPanel"
import SettingsPanel from "../../components/control-panel-components/settingsPanel/SettingsPanel"
import Footer from "../../components/footer/Footer"
import { useState } from "react"
import styles from "./controlPanel.module.css"

import { AiFillControl } from "react-icons/ai"


export default function ControlPanel(){
    const [page, setPage] = useState("home")
    
    const handlePage = ({page}) =>{
        setPage(page)
    }

    const handlePageHomePanel = ({page}) =>{
        setPage(page)
    }

    return(
        <>
            <Header onSubmit={handlePage}/>
            <section className={styles.controlPanel}>
                <div className={styles.headerPanel}>
                    <h1>Painel de Controle</h1>
                    <div className={styles.iconPanel}>
                        <p><AiFillControl /></p>
                    </div>
                </div>
                <div className={styles.bodyPanel}>
                    {
                        (page === 'home') &&
                            <HomePanel onSubmit={handlePageHomePanel}/>
                    }
                    {
                        (page === 'users') &&
                            <UsersPanel />
                    }
                    {
                        (page === 'trainings') &&
                            <TrainingsPanel />
                    }
                    {
                        (page === 'settings') &&
                            <SettingsPanel />
                    }   
                    
                </div>
            </section>
            <Footer />
        </>
    )
}