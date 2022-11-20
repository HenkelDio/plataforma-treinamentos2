import styles from "./companyPanel.module.css"
import Header from "../../components/company-panel-components/header/Header"

export default function CompanyPanel(){
    return(
        <div className={styles.companyPanel}>
            <Header />
        </div>
    )
}