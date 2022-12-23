import styles from "./headerPages.module.css";
import {TiThMenu} from "react-icons/ti";
import {RiCloseCircleFill} from "react-icons/ri";
import logo from '../../../../assets/logo.png'

window.onscroll = function() {onscrollHeader()}

function onscrollHeader(){
  if(document.documentElement.scrollTop > 499){
    if(window.innerWidth > 700){
      let innerHeader = document.getElementById("innerHeader")
      innerHeader.style.position = "fixed"
      innerHeader.style.backgroundColor = "rgb(63, 63, 63)"
    } else {
      let innerHeader = document.getElementById("innerHeader")
      innerHeader.style.position = "relative"
      innerHeader.style.backgroundColor = "transparent"
    }

  } else {
    if(window.innerWidth < 700){
      let innerHeader = document.getElementById("innerHeader")
      innerHeader.style.position = "relative"
    } else{
      let innerHeader = document.getElementById("innerHeader")
      innerHeader.style.position = "sticky"
      innerHeader.style.backgroundColor = "transparent"
    }
    
  }
}

function openSideMenu() {
  let menu = document.getElementById("mobileMenu")
  menu.style.display = 'block';


}

function closeMobileMenu() {
  let menu = document.getElementById("mobileMenu")
  menu.style.display = 'none';
}

export default function HeaderPages(){
  return(
    <>
    <div className={styles.mobileMenu} id="mobileMenu">
        <div className={styles.menu} id="menu">
          <div className={styles.innerMenu}>
            <ul>
              <li><a href='/'><p>Sobre</p></a></li>
              <li><a href='/'><p>Treinamentos</p></a></li>
              <li><a href='/'><p>Contato</p></a></li>
              <li><a href="/login"><button className={styles.btnOpenLoginMobile}>ENTRAR</button></a></li>
            </ul>
            <div onClick={closeMobileMenu} className={styles.closeMenu}>
              <RiCloseCircleFill />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <div id="innerHeader" className={styles.innerHeader}>
          <div className={styles.logo}>
            <img src={logo}></img>
          </div>
          
          <div onClick={openSideMenu} className={styles.openMenuIcon}>
            <TiThMenu />
          </div>

          <div className={styles.menu}>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Treinamentos</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="/login"><button className={styles.btnOpenLogin}>ENTRAR</button></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}