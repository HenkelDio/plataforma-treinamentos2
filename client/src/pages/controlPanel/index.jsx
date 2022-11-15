import Header from "../../components/header/Header"
import UsersPanel from "../../components/control-panel-components/usersPanel/UsersPanel"
import styles from "./controlPanel.module.css"


import { AiFillControl } from "react-icons/ai"


export default function ControlPanel(){
    return(
        <>
            <Header />
            <section className={styles.controlPanel}>
                <div className={styles.headerPanel}>
                    <h1>Painel de Controle</h1>
                    <div className={styles.iconPanel}>
                        <p><AiFillControl /></p>
                    </div>
                </div>
                <div className={styles.bodyPanel}>
                    <UsersPanel />
                </div>
            </section>
        </>
    )
}