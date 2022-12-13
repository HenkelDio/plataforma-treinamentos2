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
    const [search, setSearch] = useState('')

    const openModal = () =>{
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
    }

    const users = [];
    
    useEffect(_ => {
        const getUsers = async _ => {
            let route = `${require("../../../defaultRoute")}/getUsers/${userType}`
            await Axios.get(route).then(res => {
                if (res) {
                    setListUsers(res.data)
                    
                    for(let i = 0; i < res.data.length; i++){
                        users.push(res.data[i].admin_name)
                    }

                    console.log(users);
                
                }
            })
        }
        getUsers()
    }, [userType])

    const usersFiltered = users.filter((user) => user.startWith(search));

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
                    <input 
                    type='text' 
                    placeholder="Procurar"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    ></input>
                    {
                        (userType === "Admins") && listUsers.map((val)=>{
                            return <Admin 
                            id={val.admin_id}
                            name={val.admin_name}
                            email={val.admin_email}
                            />
                        })
                    }
                    {
                        (userType === "Users") && listUsers.map((val)=>{
                            return <User
                            id={val.user_id}
                            name={val.user_name}
                            email={val.user_email}
                            register={val.user_register}
                            phone={val.user_telephone}
                            id_company={val.user_company_id}
                            />
                        })
                    }
                    {
                        (userType === "Companies") && listUsers.map((val)=>{
                            return <Company 
                            id={val.company_id}
                            name={val.company_name}
                            email={val.company_email}
                            contact={val.company_contact}
                            register={val.company_register}
                            phone={val.company_telephone}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}