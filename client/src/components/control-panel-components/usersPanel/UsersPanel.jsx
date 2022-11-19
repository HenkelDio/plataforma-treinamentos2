import styles from "./usersPanel.module.css"
import ModalAddUser from "./modal/Modal"
import Admin from "./usersSelect/admin/admin"
import User from "./usersSelect/user/user"
import Company from "./usersSelect/company/company"
import { useState, useEffect } from "react"
import {IoIosAdd} from 'react-icons/io'
import Axios from "axios"


export default function UsersPanel(props){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [userType, setUserType] = useState("");
    const [listUsers, setListUsers] = useState([]);

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }
    
    useEffect(_ => {
        const getUsers = async _ => {
            await Axios.get(`http://localhost:3001/getUsers/${userType}`).then(res => {
                if (res) {
                    setListUsers(res.data)
                }
            })
        }
        getUsers()
    }, [userType])

    
    return(
        <div className={styles.UsersPanel}>

            <ModalAddUser openModal={modalIsOpen} closeModal={closeModal} />

            <div className={styles.headerUsers}>
                <h2>Gerenciamento de Contas</h2>
                <p>Gerencie, edite e crie usuários.</p>
            </div>
            <div className={styles.bodyUsers}>
                <div onClick={openModal} className={styles.addUserContainer}>
                    <p className={styles.addIcon}><IoIosAdd/></p>
                    <p>Adicionar novo usuário</p>
                </div>
            </div>
            <div className={styles.listUsers}>
                <p>Selecione o Usuário</p>
                <div className={styles.selectTypeAccount}>
                    <select onChange={e=>setUserType(e.target.value)}>
                        <option disabled selected="selected">Selecione o Tipo</option>
                        <option value="Admins">Administrador</option>
                        <option value="Companies">Empresa</option>
                        <option value="Users">Usuário</option>
                    </select>
                </div>
                <div className={styles.list}>
                    {
                        (userType === "Admins") &&
                            <Admin listUsers={listUsers} />
                    }
                    {
                        (userType === "Users") &&
                            <User listUsers={listUsers} />
                    }
                    {
                        (userType === "Companies") && listUsers.map((val)=>{
                            return <Company 
                            name={val.company_name}
                            email={val.company_email}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}