import styles from './settingsPanel.module.css';
import { CgProfile } from "react-icons/cg"

export default function SettingsPanel(){
    return(
        <div className={styles.settingsPanel}>

            <div className={styles.headerSettings}>
                <h2>Configurações</h2>
                <p>Ajustes de conta</p>
            </div>

            <div className={styles.bodySettings}>
                <div className={styles.profileBox}>
                    <div className={styles.profileIcon}>
                        <CgProfile />
                    </div>
                    <div className={styles.profileData}>
                        <div style={{marginBottom: "10px"}} className={styles.name}>
                            <h4>Willian José Henkel de Deus</h4>
                        </div>
                        <div style={{marginBottom: "10px"}} className={styles.email}>
                            <h4>willianhenkel@gmail.com</h4>
                        </div>
                        <div style={{marginBottom: "10px"}} className={styles.type}>
                            <h4>Empresa</h4>
                        </div>
                        <div className={styles.options}>
                            <button>Editar</button>
                            <button>Sair da conta</button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}