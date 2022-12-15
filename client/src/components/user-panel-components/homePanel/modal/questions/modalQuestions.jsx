import styles from "./modalQuestions.module.css";
import Modal from "react-modal";
import { AuthContext } from "../../../../../contexts/AuthContext";
import Axios from "axios"
import { useState, useContext, useEffect } from "react";

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
      <div className={styles.questionContainer}>
        <div className={styles.titleQuestion}>
          <h3>1. Primeira pergunta</h3>
        </div>
        <div className={styles.questions}>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question1" id="1"></input>
            <label htmlFor="1">primeira alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question1" id="2"></input>
            <label htmlFor="2">segunda alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question1" id="3"></input>
            <label htmlFor="3">terceira alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question1" id="4"></input>
            <label htmlFor="4">quarta alternativa</label>
          </div>
        </div>
      </div>
      <div className={styles.questionContainer}>
        <div className={styles.titleQuestion}>
          <h3>2. Segunda pergunta</h3>
        </div>
        <div className={styles.questions}>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question2" id="1"></input>
            <label htmlFor="1">primeira alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question2" id="2"></input>
            <label htmlFor="2">segunda alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question2" id="3"></input>
            <label htmlFor="3">terceira alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question2" id="4"></input>
            <label htmlFor="4">quarta alternativa</label>
          </div>
        </div>
      </div>
      <div className={styles.questionContainer}>
        <div className={styles.titleQuestion}>
          <h3>3. Terceira pergunta</h3>
        </div>
        <div className={styles.questions}>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question3" id="1"></input>
            <label htmlFor="1">primeira alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question3" id="2"></input>
            <label htmlFor="2">segunda alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question3" id="3"></input>
            <label htmlFor="3">terceira alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question3" id="4"></input>
            <label htmlFor="4">quarta alternativa</label>
          </div>
        </div>
      </div>
      <div className={styles.questionContainer}>
        <div className={styles.titleQuestion}>
          <h3>4. Quarta pergunta</h3>
        </div>
        <div className={styles.questions}>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question4" id="1"></input>
            <label htmlFor="1">primeira alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question4" id="2"></input>
            <label htmlFor="2">segunda alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question4" id="3"></input>
            <label htmlFor="3">terceira alternativa</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name="question4" id="4"></input>
            <label htmlFor="4">quarta alternativa</label>
          </div>
        </div>
      </div>
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
