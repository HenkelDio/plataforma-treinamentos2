import { useEffect } from "react";
import styles from "./modalQuestions.module.css";

export default function InputBoxQuestion(props){

  console.log(props.data.resposta)

  useEffect(()=>{
    const checkAnswer = () =>{
      if(props.data.resposta === "c"){
        let c = document.getElementById("c")
        c.setAttribute("correct", "correct")
      }

      switch(props.data.resposta){
        case "a":
          let a = document.getElementById("a")
          a.setAttribute("correct", "correct")
          break;
        case "b":
          let b = document.getElementById("b")
          b.setAttribute("correct", "correct")
          break;
        case "c":
          let c = document.getElementById("c")
          c.setAttribute("correct", "correct")
          break;
        case "d":
          let d = document.getElementById("d")
          d.setAttribute("correct", "correct")
      }
      
    }

    checkAnswer()
  },[])

 
  
  return(
    <div className={styles.questionContainer}>
        <div className={styles.titleQuestion}>
          <h3>{props.data.pergunta}</h3>
        </div>
        <div className={styles.questions}>
          <div className={styles.boxQuestion}>
            <input type="radio" name={`question`+props.data.pergunta} id="a"></input>
            <label htmlFor="1">{props.data.alternativas.a}</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name={`question`+props.data.pergunta} id="b"></input>
            <label htmlFor="2">{props.data.alternativas.b}</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name={`question`+props.data.pergunta} id="c"></input>
            <label htmlFor="3">{props.data.alternativas.c}</label>
          </div>
          <div className={styles.boxQuestion}>
            <input type="radio" name={`question`+props.data.pergunta} id="d"></input>
            <label htmlFor="4">{props.data.alternativas.d}</label>
          </div>
        </div>
      </div>
  )
}