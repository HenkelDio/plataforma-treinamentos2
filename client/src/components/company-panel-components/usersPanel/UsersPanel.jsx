import styles from "./usersPanel.module.css"
import ModalAddUser from "./modal/Modal"
import User from "./usersSelect/user/user"
import { useState, useEffect } from "react"
import {IoIosAdd} from 'react-icons/io'
import Axios from "axios"


export default function UsersPanel(props){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const companyEmail = JSON.parse(localStorage["user"]).email

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }
    
    useEffect(_ => {
        const getUsers = async _ => {
            let route = `${require("../../../defaultRoute")}/getUsersCompany/${companyEmail}`
            await Axios.get(route).then(res => {
                if (res) {
                    setListUsers(res.data)
                }
            })
        }
        getUsers()
    }, [])

    
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
                <p>Usuários</p>
                <div className={styles.list}>
                    {
                    listUsers.map((val)=>{
                        return <User 
                        data={val}
                        />    
                    })
                    }
                </div>
            </div>
        </div>
    )
}