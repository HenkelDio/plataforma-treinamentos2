import styles from "./modalQuestions.module.css";
import Modal from "react-modal";
import Axios from "axios"
import { useState, useEffect } from "react";
import InputBoxQuestion from "./inputBoxQuestion";
import { BsPatchCheck } from "react-icons/bs"
import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';
import Certificate from "../certificate-html/Certificate";


export default function ModalQuestion(props) {
  
  const [questions, setQuestions] = useState([]);
  const [approved, setApproved] = useState(false)

  console.log(props)

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

    if(score >= 75.00) {
      setApproved(true)
      let completeCouseButton = document.getElementById('completeCouseButton')
      completeCouseButton.style.display = "none"
      let headerModal = document.getElementById('headerModal')
      headerModal.style.display = "none"
    } else {
      console.log("reprovado")
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


  function getCertificate(){
    htmlToImage.toJpeg(document.getElementById('certificateContainer'), { quality: 1.0 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'certificado.jpeg';
    link.href = dataUrl;
    link.click();
  });
  }

  return (
    <>
      <Modal
        isOpen={props.openModal}
        contentLabel="Exemplo"
        overlayClassName={styles.modalOverlay}
        className={styles.ModalQuestion}
        ariaHideApp={false}
        id="modalQuestion"
        >
        <div id="headerModal" className={styles.headerModal}>
          <h1>Questões de {props.data.data.data.course_title}</h1>
        </div>
        <div class={styles.bodyModal}>
          {

            (!approved) &&
            questions.map((val) => {
              return <InputBoxQuestion data={val} setQuestions={setQuestions} questions={questions} />
            })
          }

          {
            (approved) && 
            <div className={styles.complete}>

                <div className={styles.close}>
                  <a href="#" onClick={props.closeModal}>Fechar Aba</a>
                </div>

              <div className={styles.detailsComplete}>
                <div className={styles.icon}>
                  <p><BsPatchCheck /></p>
                </div>
                <div className={styles.details}>
                  <h1>Curso Completo!</h1>
                  <p>Parabéns pela dedicação!</p>
                </div>
                <div className={styles.downloadCertificate}>
                  <a href="#" onClick={getCertificate} >Gerar Certificado</a>
                </div>
              </div>
              <Certificate 
              name={JSON.parse(localStorage["user"]).name} 
              course={props.data.data.data.course_title}
              hours={props.data.data.data.course_hours}
              />
             
            </div>

          }
          

          <button
            className={styles.completeCourse}
            onClick={completeCourse}
            id="completeCouseButton"
          >
            Salvar e Concluir treinamento
          </button>
        </div>
      </Modal>
    </>
  )
}
