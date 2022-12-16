import { useEffect } from "react";
import styles from "./modalQuestions.module.css";

export default function InputBoxQuestion(props){

  return(
    <div className={styles.questionContainer}>
        <div className={styles.titleQuestion}>
          <h3>{props.data.pergunta}</h3>
        </div>
        <div className={styles.questions}>
          <div className={styles.boxQuestion}>
            <label htmlFor={`a `+props.data.pergunta}>
              <input type="radio" name={`question`+props.data.pergunta} id={`a `+props.data.pergunta}></input>
            {props.data.alternativas.a}</label>
          </div>
          <div className={styles.boxQuestion}>
            <label htmlFor={`b `+props.data.pergunta}>
              <input type="radio" name={`question`+props.data.pergunta} id={`b `+props.data.pergunta}></input>
            {props.data.alternativas.b}</label>
          </div>
          <div className={styles.boxQuestion}>
            <label htmlFor={`c `+props.data.pergunta}>
              <input type="radio" name={`question`+props.data.pergunta} id={`c `+props.data.pergunta}></input>
            {props.data.alternativas.c}</label>
          </div>
          <div className={styles.boxQuestion}>
            <label htmlFor={`d `+props.data.pergunta}>
              <input type="radio" name={`question`+props.data.pergunta} id={`d `+props.data.pergunta}></input>
            {props.data.alternativas.d}</label>
          </div>
        </div>
      </div>
  )
}