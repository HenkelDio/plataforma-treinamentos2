import styles from "./question.module.css"

export default function Question(props){

  console.log(props.number)

  return (
    <div className={styles.exercisesContainer}>
      <div className={styles.exercisesBox}>
        <div className={styles.exercisesTitle}>
          <input
            type="text"
            placeholder={props.number}
          ></input>
        </div>
        <div className={styles.exercisesOptions}>
          <div className={styles.option}>
            <label htmlFor="firstOption"><b>a.</b></label>
            <input type="text" placeholder="Primeira opção" name="firstOption"></input>
          </div>
          <div className={styles.option}>
            <label htmlFor="secondOption"><b>b.</b></label>
            <input type="text" placeholder="Segunda opção" name="secondOption"></input>
          </div>
          <div className={styles.option}>
            <label htmlFor="thirdOption"><b>c.</b></label>
            <input type="text" placeholder="Terceira opção" name="thirdOption"></input>
          </div>
          <div className={styles.option}>
            <label htmlFor="fourthOption"><b>d.</b></label>
            <input type="text" placeholder="Quarta opção" name="fourthOption"></input>
          </div>
          <div className={styles.answer}>
            <label htmlFor="answer">resposta correta</label>
            <select>
              <option>a</option>
              <option>b</option>
              <option>c</option>
              <option>d</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}