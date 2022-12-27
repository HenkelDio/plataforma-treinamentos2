import logo from '../../../../assets/logo.png'
import styles from "./footer.module.css"

export default function Footer(){
  return(
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.contactUsButton}>
          <button>ENTRE EM CONTATO</button>
        </div>
      </div>
    </section>

  )
}