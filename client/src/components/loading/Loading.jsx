import styles from "./loading.module.css"

export default function Loading(){
  return (
    <div className={styles.LoadingState}>
      <p>Carregando...</p>
    </div>
  )
}