import styles from "../usersSelect.module.css"

export default function Admin(props){
    return(
        <div className={styles.card}>
            <div className={styles.name}>
                <p>{props.name}</p>
            </div>
            <div className={styles.email}>
                <p>{props.email}</p>
            </div>
            <div className={styles.features}>
                <button>Editar</button>
            </div>
        </div>

    )
}