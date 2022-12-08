import styles from "./header.module.css";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext";
import logo from "../../../assets/logo.png"
import ModalLogout from "./modal-logout/ModalLogout"

function Header({ onSubmit }) {
  const [homePage, setHomePage] = useState("home");
  const [usersPage, setUsersPage] = useState("users");
  const [trainingsPage, setTrainingsPage] = useState("trainings");
  const [settingsPage, setSettingsPage] = useState("settings");
  const [modalIsOpen, setIsOpen] = useState(false);

  const { name, logoutUser } = useContext(AuthContext)

  const logout = () =>{
    logoutUser()
  }

  const openModal = () =>{
    setIsOpen(true)
    closeSideMenu()
}

const closeModal = () =>{
    setIsOpen(false)
}


  const handlePage = (page) => {
    onSubmit({ page });
    closeSideMenu();
  };

  const setPageHome = () => {
    setHomePage("home");
    handlePage(homePage);

    let menuLabels = document.querySelectorAll("#menu ul li");
    for (let i = 0; i < menuLabels.length; i++) {
      menuLabels[i].style.borderBottom = "none";
    }

    let homeLabel = document.getElementById("home");
    homeLabel.style.borderBottom = "2px solid #ccc";
  };

  const setPageUsers = () => {
    setUsersPage("users");
    handlePage(usersPage);

    let menuLabels = document.querySelectorAll("#menu ul li");
    for (let i = 0; i < menuLabels.length; i++) {
      menuLabels[i].style.borderBottom = "none";
    }

    let userLabel = document.getElementById("users");
    userLabel.style.borderBottom = "2px solid #ccc";
  };

  const setPageSettings = () => {
    setSettingsPage("settings");
    handlePage(settingsPage);

    let menuLabels = document.querySelectorAll("#menu ul li");
    for (let i = 0; i < menuLabels.length; i++) {
      menuLabels[i].style.borderBottom = "none";
    }

    let settingsLabel = document.getElementById("settings");
    settingsLabel.style.borderBottom = "2px solid #ccc";
  };

  const openProfile = () => {
    let profileInfo = document.getElementById("profileInfo");
    profileInfo.style.display = "block";
  };

  const closeProfile = () => {
    let profileInfo = document.getElementById("profileInfo");
    profileInfo.style.display = "none";
  };

  const openSideMenu = () => {
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.style.display = "block";
  };

  const closeSideMenu = () => {
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.style.display = "none";
  };

  return (
    <div className={styles.header}>

      <ModalLogout openModal={modalIsOpen} closeModal={closeModal} />

      <div className={styles.sideMenu} id="sideMenu">
        <div className={styles.innerSideMenu}>
          <div onClick={closeSideMenu} className={styles.closeSideMenuIcon}>
            <p>
              <IoIosArrowBack />
            </p>
          </div>

          <div className={styles.profile}>
            <p className={styles.icon}>
              <CgProfile />
            </p>
            <p className={styles.name}>{name}</p>
          </div>
          <hr></hr>
          <div className={styles.menuMobile}>
            <ul>
              <li onClick={setPageHome}>TREINAMENTOS</li>
            </ul>
          </div>
          <button className={styles.buttonAcessAccount}>MINHA CONTA</button>
          <button onClick={openModal} className={styles.buttonLoggoutAccount}>SAIR</button>
        </div>
      </div>

      <div className={styles.innerHeader}>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <div className={styles.menu} id="menu">
          <ul>
            <li onClick={setPageHome} id="home" className={styles.selected}>
              treinamentos
            </li>
          </ul>
        </div>
        <div className={styles.profile}>
          <div className={styles.IconsideMenuMobile}>
            <p onClick={openSideMenu}>
              <BiMenuAltRight />
            </p>
          </div>

          <p onClick={openProfile} className={styles.iconProfile}>
            <CgProfile />
          </p>
          <div className={styles.profileInfo} id="profileInfo">
            <div onClick={closeProfile} className={styles.closeProfileInfo}>
              <p>X</p>
            </div>
            <p className={styles.icon}>
              <CgProfile />
            </p>
            <p className={styles.name}>{name}</p>
            <hr></hr>
            <div className={styles.profileConfigs}>
              <p onClick={openModal}>Sair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
