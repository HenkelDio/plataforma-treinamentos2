import styles from "./modalQuestions.module.css";
import Modal from "react-modal";
import Axios from "axios"
import { useState, useEffect } from "react";
import InputBoxQuestion from "./inputBoxQuestion";

export default function ModalQuestion(props) {

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

  const completeCourse = () => {
    const point = 100 / questions.length
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
      if (questions[i].resposta === questions[i].userSelecionou) {
        score += point
      }
    }
    const route = `${require("../../../../../defaultRoute")}/changeStatus`;
    const data = {
      status: (score >= 75.00 ? "aprovado" : "reprovado"),
      courseId: props.data.data.data.course_id,
      user_id: JSON.parse(localStorage["user"]).id
    }
    Axios.post(route, data).then(res => {
      console.log(res)
    })

  }


  return (
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
            questions.map((val) => {
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
