import Modal from "react-modal";
import styles from "./modal.module.css"
import { useState, useEffect} from "react";
import { IoIosArrowBack } from "react-icons/io"
import ModalCompany from "./modal-users/modal-company/ModalCompany";
import ModalUser from "./modal-users/modal-user/ModalUser";
import ModalAdmin from "./modal-users/modal-admin/ModalAdmin";

export default function ModalAddUser(props){
    const [userType, setUserType] = useState("")

    const nextPage = () =>{
        if(userType == ""){
            alert("Selecione algum tipo de usuário")
        } else{
            let bodyModal = document.getElementById("bodyModal")
            bodyModal.style.display = "none"
            let containerForm = document.getElementById("containerForm")
            containerForm.style.display = "block"
        }
   
    }

    const displayNextButton = () => {

        let nextButton = document.getElementById("nextButton")
        nextButton.removeAttribute("disable")
        nextButton.style.opacity = "1"
    }

    const cleanSelect = () =>{
        let container = document.querySelectorAll("label")
        for(let i = 0; i < container.length; i++){
            container[i].style.backgroundColor = "#017828"
        }
    }

    const setCompany = (e) =>{
        setUserType("company");

        cleanSelect();

        let company = document.getElementById("company")
        company.style.backgroundColor = "#0d381b"

        let pageTitle = document.getElementById("pageTitle")
        pageTitle.innerHTML = "Criar usuário empresa"

        displayNextButton();
    }

    const setUser = (e) =>{
        setUserType("user");

        cleanSelect();

        let user = document.getElementById("user")
        user.style.backgroundColor = "#0d381b"

        let pageTitle = document.getElementById("pageTitle")
        pageTitle.innerHTML = "Criar usuário"

        displayNextButton();
    }

    const setAdmin = (e) =>{
        setUserType("admin");

        cleanSelect();

        let admin = document.getElementById("admin")
        admin.style.backgroundColor = "#0d381b"

        let pageTitle = document.getElementById("pageTitle")
        pageTitle.innerHTML = "Criar usuário Administrador"

        displayNextButton();
    }

    const closeModal = () =>{
        props.closeModal()
    }

    return(
        <div id="modalAddUser" className={styles.modalAddUser}>
            <Modal 
            isOpen={props.openModal}
            onRequestClose={closeModal}
            contentLabel="Exemplo"
            overlayClassName={styles.modalOverlay}
            className={styles.modal}
            ariaHideApp={false}>
                <div className={styles.headerModal}>
                    
                    <div onClick={closeModal} className={styles.closeModal}>
                        <IoIosArrowBack />
                    </div>

                    <h1 id="pageTitle">Criar novo usuário</h1>
                </div>
                <div id="bodyModal" className={styles.bodyModal}>
                    <p>Selecione abaixo qual tipo de usuário você deseja adicionar</p>
                    <div id="" className={styles.listUsers}>
                        <div className={styles.typeUser}>
                            <label id="company" htmlFor="company" onClick={setCompany}>Nova empresa
                            <input type="radio" className="user" id="company" name="user" value="company"></input>
                            </label>
                        </div>
                        <div className={styles.typeUser}>
                            <label id="user" htmlFor="user" onClick={setUser}>Novo usuário
                            <input type="radio" className="user" id="user" name="user" value="user"></input>
                            </label>
                        </div>
                        <div className={styles.typeUser}>
                            <label id="admin" htmlFor="admin" onClick={setAdmin}>Novo administrador
                            <input type="radio" className="user" id="admin" name="user" value="admin"></input>
                            </label>
                        </div>

                        <button id="nextButton" onClick={nextPage} className={styles.nextButton}>CONTINUAR</button>
                    </div>
                </div>
                <div id="containerForm" style={{display: "none"}} className={styles.containerForm}>
                    {
                        (userType === "company") &&
                            <ModalCompany />
                    }
                    {
                        (userType === "user") &&
                            <ModalUser />
                    }
                    {
                        (userType === "admin") &&
                           <ModalAdmin />
                    }
                </div>
                
            </Modal>
        </div>
    )
}