import Header from "../../components/company-panel-components/header/Header"
import HomePanel from "../../components/company-panel-components/homePanel/HomePanel"
import UsersPanel from "../../components/company-panel-components/usersPanel/UsersPanel"
import SettingsPanel from "../../components/company-panel-components/settingsPanel/SettingsPanel"
import { useState } from "react"
import styles from "./companyPanel.module.css"

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
                        (page === 'settings') &&
                            <SettingsPanel />
                    }   
                    
                </div>
            </section>
        </>
    )
}