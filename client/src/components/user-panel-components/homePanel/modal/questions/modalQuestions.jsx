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
    const point = questions.length / questions.length;
    let score = "";
    
    for(let i = 0; i < questions.length; i++){
      if(questions[i].resposta === questions[i].userSelecionou){
        score = Number(score + point)
      }
    }

    console.log(score)
    console.log((questions.length + questions.length) / questions.length)

    if(score >= ((questions.length + questions.length) / questions.length)){
      console.log("Aprovado")
    } else {
      console.log("Reprovado")
    }



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
          return <InputBoxQuestion data={val} setQuestions={setQuestions} questions={questions} />
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
