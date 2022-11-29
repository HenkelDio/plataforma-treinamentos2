import styles from './settingsPanel.module.css';
import { useState } from 'react';
import { CgProfile } from "react-icons/cg"
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import ModalEditUser from './modal/edit-user/modal';
import ModalLogout from './modal/logout-user/modal';

export default function SettingsPanel(props){
    const [modalEditIsOpen, setIsOpenEdit] = useState(false);
    const [modalLogoutIsOpen, setIsOpenLogout] = useState(false);

    const { name, email } = useContext(AuthContext)

    const openModalEdit = () =>{
        setIsOpenEdit(true)
    }

    const closeModalEdit = () =>{
        setIsOpenEdit(false)
    }

    const openModalLogout = () =>{
        setIsOpenLogout(true)
    }

    const closeModalLogout = () =>{
        setIsOpenLogout(false)
    }

    return(
        <div className={styles.settingsPanel}>

        <ModalEditUser 
            openModal={modalEditIsOpen} 
            closeModal={closeModalEdit} 
            name={name}
            email={email}
        />  

        <ModalLogout 
            openModal={modalLogoutIsOpen} 
            closeModal={closeModalLogout} 
            name={name}
            email={email}
        />  

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
                            <h4>{name}</h4>
                        </div>
                        <div style={{marginBottom: "10px"}} className={styles.email}>
                            <h4>{email}</h4>
                        </div>
                        <div style={{marginBottom: "10px"}} className={styles.type}>
                            <h4>Administrador</h4>
                        </div>
                        <div className={styles.options}>
                            <button onClick={openModalEdit}>Editar</button>
                            <button onClick={openModalLogout}>Sair da conta</button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}