import styles from "./modalQuestions.module.css";
import Modal from "react-modal";
import { AuthContext } from "../../../../../contexts/AuthContext";
import Axios from "axios"
import { useState, useContext, useEffect } from "react";
import InputBoxQuestion from "./inputBoxQuestion";

export default function ModalQuestion(props){
  const { name, email } = useContext(AuthContext)

  const [questions, setQuestions] = useState([]);

  useEffect(_ => {
    const getQuestions = async _ => {
      console.log(props.data.data.data.course_id)
      const route = `${require("../../../../../defaultRoute")}/getCourseExam/${props.data.data.data.course_id}`
      await Axios.get(route).then(res => {
        if (res) {
          setQuestions(res.data);
        }
      })
    }
    getQuestions();
  }, [])

  const completeCourse = () =>{
    alert("Treinamento Concluído!")

    window.open(`https://wa.me/5541996588728?text=Treinamento Finalizado! Nome: ${name} / E-mail: ${email} `, '_blank')

    document.location.reload()
  }


  return(
    <>
    <Modal
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.ModalQuestion}
    ariaHideApp={false}>
    <div className={styles.headerModal}>
      <h1>Questões de {props.data.data.data.course_title}</h1>
    </div>
    <div class={styles.bodyModal}>
      
      {
        questions.map((val)=>{
          return <InputBoxQuestion data={val} />
        })
      }

      <button 
      className={styles.completeCourse}
      onClick={completeCourse}
      >
        Salvar e Concluir treinamento
      </button>
    </div>
    </Modal>
    </>
  )
}
