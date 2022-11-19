import styles from "../usersSelect.module.css"

export default function Company(){
    return(
        <div className={styles.card}>
            <div className={styles.name}>
                <p>Willian</p>
            </div>
            <div className={styles.email}>
                <p>willianhenkel@gmail.com</p>
            </div>
            <div className={styles.features}>
                <button>Editar</button>
            </div>
        </div>

    )
}