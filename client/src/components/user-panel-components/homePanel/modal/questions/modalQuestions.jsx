import styles from "./modalQuestions.module.css";
import Modal from "react-modal";
import questions from "./questions.js"
import InputBoxQuestion from "./inputBoxQuestion";

export default function ModalQuestion(props){

  console.log(questions[0].options)

  return(
    <>
    <Modal
    isOpen={props.openModal}
    onRequestClose={props.closeModal}
    contentLabel="Exemplo"
    overlayClassName={styles.modalOverlay}
    className={styles.ModalLogout}
    ariaHideApp={false}>
    <div className={styles.headerModal}>
      <h1>Questões de {props.data.data.data.course_title}</h1>
    </div>
    <div className={styles.bodyModal}>
      <p>{questions[0].question}</p>
      <div className={styles.inputBox}>
        {questions[0].options.map((val)=>{
          return <InputBoxQuestion data={val}/>
        })}
      </div>
      <p>{questions[1].question}</p>
      <div className={styles.inputBox}>
        {questions[1].options.map((val)=>{
          return <InputBoxQuestion data={val}/>
        })}
      </div>
    </div>
    </Modal>
    </>
  )
}
