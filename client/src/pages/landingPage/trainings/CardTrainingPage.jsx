import styles from "./trainings.module.css"

export default function CardTrainingPage(props) {

  const { setTitle, setUrlImage, setDescription, setPrice } = props;

  const openModalTrainingPage = () => {
    let modal = document.querySelector(".modalTrainingPage")
    modal.classList.add("animation")
    let innerModal = document.querySelector(".innerModal")
    innerModal.style.display = "block"

    setTitle(props.data.title)
    setUrlImage(props.data.urlImage)
    setDescription(props.data.description)
    setPrice(props.data.price)
  }

  return (
    <>
      <div onClick={openModalTrainingPage} className={styles.card} id="card1">
        <div className={styles.headerCard}>
          <img src={props.data.urlImage} alt='img'></img>
        </div>
        <div className={styles.bodyCard}>
          <div className={styles.titleCard}>
            <h2>{props.data.title}</h2>
          </div>
          <div className={styles.acessButton}>
            <button>Ver Mais</button>
          </div>
        </div>
      </div>
    </>
  )
}