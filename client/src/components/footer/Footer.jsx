import styles from "./footer.module.css";

export default function Footer(){
  return(
    <div className={styles.footer}>
      <p>Versão 1.0.0</p>
      <p>Desenvolvido com 💛 pela Code&Code</p>
    </div>
  )
}