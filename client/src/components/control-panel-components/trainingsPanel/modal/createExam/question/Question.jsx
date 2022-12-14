import styles from "./question.module.css"

export default function Question(props) {

  const { questionNumber, questions, setQuestions } = props
  
  function handelChange(e, v1, v2) {
    if (v1 && !v2) {
      let newQuestions = questions
      newQuestions[questionNumber][v1] = e.target.value
      setQuestions(newQuestions)
    } else {
      let newQuestions = questions;
      newQuestions[questionNumber][v1][v2] = e.target.value
      setQuestions(newQuestions)
    }
  }

  return (
    <div className={styles.exercisesContainer}>
      <div className={styles.exercisesBox}>
        <div className={styles.exercisesTitle}>
          <input
            type="text"
            placeholder={"Questão"}
            onChange={e => handelChange(e, "pergunta")}
          ></input>
        </div>
        <div className={styles.exercisesOptions}>
          <div className={styles.option}>
            <label htmlFor="firstOption"><b>a.</b></label>
            <input type="text" placeholder="Primeira opção" name="firstOption" onChange={e => handelChange(e, "alternativas", "a")}></input>
          </div>
          <div className={styles.option}>
            <label htmlFor="secondOption"><b>b.</b></label>
            <input type="text" placeholder="Segunda opção" name="secondOption" onChange={e => handelChange(e, "alternativas", "b")}></input>
          </div>
          <div className={styles.option}>
            <label htmlFor="thirdOption"><b>c.</b></label>
            <input type="text" placeholder="Terceira opção" name="thirdOption" onChange={e => handelChange(e, "alternativas", "c")}></input>
          </div>
          <div className={styles.option}>
            <label htmlFor="fourthOption"><b>d.</b></label>
            <input type="text" placeholder="Quarta opção" name="fourthOption" onChange={e => handelChange(e, "alternativas", "d")}></input>
          </div>
          <div className={styles.answer}>
            <label htmlFor="answer">resposta correta</label>
            <select onChange={e => handelChange(e, "resposta")}>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
              <option value="d">d</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}