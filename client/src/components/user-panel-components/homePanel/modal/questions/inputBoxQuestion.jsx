import { useState } from "react";
import styles from "./modalQuestions.module.css";

export default function InputBoxQuestion(props){

  const { setQuestions } = props;

  const selectedQuestion = (e) => {
    const prevQuestions = props.questions;
    prevQuestions[props.data.num].userSelecionou = e.target.value;
    setQuestions(prevQuestions);
  }


  return(
    <div className={styles.questionContainer}>
        <div className={styles.titleQuestion}>
          <h3>{props.data.pergunta}</h3>
        </div>
        <div className={styles.questions}>
          <div className={styles.boxQuestion}>
            <label onClick={selectedQuestion} htmlFor={`a `+props.data.pergunta}>
              <input type="radio" value="a" name={`question`+props.data.pergunta} id={`a `+props.data.pergunta}></input>
            {props.data.alternativas.a}</label>
          </div>
          <div className={styles.boxQuestion}>
            <label onClick={selectedQuestion} htmlFor={`b `+props.data.pergunta}>
              <input type="radio" value="b" name={`question`+props.data.pergunta} id={`b `+props.data.pergunta}></input>
            {props.data.alternativas.b}</label>
          </div>
          <div className={styles.boxQuestion}>
            <label onClick={selectedQuestion} htmlFor={`c `+props.data.pergunta}>
              <input type="radio" value="c" name={`question`+props.data.pergunta} id={`c `+props.data.pergunta}></input>
            {props.data.alternativas.c}</label>
          </div>
          <div className={styles.boxQuestion}>
            <label onClick={selectedQuestion} htmlFor={`d `+props.data.pergunta}>
              <input type="radio" value="d" name={`question`+props.data.pergunta} id={`d `+props.data.pergunta}></input>
            {props.data.alternativas.d}</label>
          </div>
        </div>
      </div>
  )
}