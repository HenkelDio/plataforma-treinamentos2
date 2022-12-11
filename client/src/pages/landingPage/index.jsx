import styles from './index.module.css';
import logo from '../../assets/logo.png'

export default function LandingPage(){
  return(
    <div className={styles.LandingPage}>
      <div className={styles.header}>
        <div className={styles.innerHeader}>
          <div className={styles.logo}>
            <img src={logo}></img>
          </div>
          <div className={styles.menu}>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Treinamentos</a></li>
              <li><a href="/login"><button className={styles.btnOpenLogin}>ENTRAR</button></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}