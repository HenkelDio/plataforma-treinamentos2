import styles from "./modalUser.module.css"
import { useState, useEffect } from "react"
import Axios from "axios"

export default function SelectCompany(props){
    
    const { setUserCompanyId } = props;
    const [companies, setCompanies] = useState([])
    const userType = "Companies"

    useEffect(_ => {
        const getCompanies = async _ => {
            let route = `${require("../../../../../../defaultRoute")}/getUsers/${userType}`
            await Axios.get(route).then(res => {
                if (res) {
                    setCompanies(res.data)
                }
            })
        }
        getCompanies()
    }, [])
    
    return(
        <>
            <select className={styles.selectCompany}
            onChange={e => setUserCompanyId(e.target.value)}>
                {
                    companies.map(company => (
                        <option key={company.company_id} value={company.company_id}>{company.company_name}</option>
                    ))
                }
            </select>
        </>
    )
}