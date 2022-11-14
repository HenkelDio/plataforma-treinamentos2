import styles from "./usersPanel.module.css"
import ModalAddUser from "./modal/Modal"
import { useState } from "react"
import {IoIosAdd} from 'react-icons/io'


export default function UsersPanel(props){
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }


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
                    <select>
                        <option disabled selected="selected">Selecione o Tipo</option>
                        <option value="Administradores">Administrador</option>
                        <option value="Empresas">Empresa</option>
                        <option value="Usuários">Usuário</option>
                    </select>
                </div>
            </div>
        </div>
    )
}