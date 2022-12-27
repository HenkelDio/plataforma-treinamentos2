import Modal from "react-modal";

export default function ModalTrainingPage(props) {

  const closeModalTrainingPage = () => {
    let modal = document.querySelector(".modalTrainingPage")
    modal.classList.remove("animation")
    let innerModal = document.querySelector(".innerModal")
    innerModal.style.display = "none"
  }

  return (
    <>
      <div className="modalTrainingPage">
        <div className="innerModal">
          
          <div className="headerModalTrainingPage">
            <div className="title">
              <h1>{props.title}</h1>
            </div>
          </div>

          <div className="bodyModalTrainingPage">
            <div className="image">
              <img src={props.urlImage} alt="img"></img>
            </div>
            <div className="description">
              <p>{props.description}</p>
            </div>
            <div className="price">
              <h3>R$ {props.price}</h3>
            </div>
          </div>

          <div className="BuyTrainingPage">
            <button>Comprar</button>
          </div>
          <div onClick={closeModalTrainingPage} className="closeModalTrainingPage">
            <button>Fechar</button>
          </div>
        </div>
      </div>
    </>
  )
}