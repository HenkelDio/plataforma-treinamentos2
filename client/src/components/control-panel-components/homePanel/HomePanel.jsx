import styles from "./homePanel.module.css"

import { HiUsers } from "react-icons/hi"
import { FaBook } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"

export default function HomePanel(){
    return(
        <div className={styles.homePanel}>
            <div className={styles.headerHomePanel}>
                <h2>Home</h2>
                <p>O que você quer fazer hoje?</p>
            </div>
            <div className={styles.bodyHomePanel}>
                <div className={styles.boxOption}>
                    <div className={styles.iconOption}>
                        <p><HiUsers /></p>
                    </div>
                    <p>Gerenciar e criar usuários</p>
                </div>
                <div className={styles.boxOption}>
                    <div className={styles.iconOption}>
                        <p><FaBook /></p>
                    </div>
                    <p>Editar e criar treinamentos</p>
                </div>
                <div className={styles.boxOption}>
                    <div className={styles.iconOption}>
                        <p><AiFillSetting /></p>
                    </div>
                    <p>Configurações de conta</p>
                </div>
            </div>
        </div>
    )
}