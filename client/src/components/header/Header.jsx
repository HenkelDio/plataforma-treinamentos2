import styles from "./header.module.css"
import { CgProfile } from "react-icons/cg"
import { BiMenuAltRight } from "react-icons/bi"
import { IoIosArrowBack } from "react-icons/io"

function Header(){

    const openProfile = () =>{
        let profileInfo = document.getElementById("profileInfo")
        profileInfo.style.display = "block"
    }

    const closeProfile = () =>{
        let profileInfo = document.getElementById("profileInfo")
        profileInfo.style.display = "none"
    }

    const openSideMenu = () =>{
        let sideMenu = document.getElementById("sideMenu")
        sideMenu.style.display = "block"
    }
    
    const closeSideMenu = () =>{
        let sideMenu = document.getElementById("sideMenu")
        sideMenu.style.display = "none"

    }

    
    return(
        <div className={styles.header}>

            <div className={styles.sideMenu} id="sideMenu">
                <div className={styles.innerSideMenu}>
                    <div  onClick={closeSideMenu} className={styles.closeSideMenuIcon}>
                        <p><IoIosArrowBack/></p>
                    </div>

                    <div className={styles.profile}>
                        <p className={styles.icon}><CgProfile /></p>
                        <p className={styles.name}>Souza</p>
                    </div>
                    <hr></hr>
                    <div className={styles.menuMobile}>
                        <ul>
                            <li>HOME</li>
                            <li>USUÁRIOS</li>
                            <li>TREINAMENTOS</li>
                            <li>CONFIGURAÇÕES</li>
                        </ul>
                    </div>
                    <button className={styles.buttonAcessAccount}>MINHA CONTA</button>
                    <button className={styles.buttonLoggoutAccount}>SAIR</button>
                </div>
            </div>

            <div className={styles.innerHeader}>
                <div className={styles.logo}>
                    <h1>Souza Treinamentos</h1>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li className={styles.selected}>home</li>
                        <li>usuários</li>
                        <li>treinamentos</li>
                        <li>configurações</li>
                    </ul>
                </div>
                <div className={styles.profile}>

                    <div className={styles.IconsideMenuMobile}>
                        <p onClick={openSideMenu}><BiMenuAltRight/></p>
                    </div>


                    <p onClick={openProfile} className={styles.iconProfile}><CgProfile /></p>
                    <div className={styles.profileInfo} id="profileInfo">
                        <div onClick={closeProfile} className={styles.closeProfileInfo}>
                            <p>X</p>
                        </div>
                        <p className={styles.icon}><CgProfile /></p>
                        <p className={styles.name}>Souza</p>
                        <hr></hr>
                        <div className={styles.profileConfigs}>
                            <p>Minha conta</p>
                            <p>Sair</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;