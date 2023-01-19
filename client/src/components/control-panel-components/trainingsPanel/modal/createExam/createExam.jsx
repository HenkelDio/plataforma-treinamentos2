import styles from '../modal.module.css';
import Question from "./question/Question"

function CreateExam(props) {
    
    const { questions, setQuestions } = props

    function addQuestion() {
        if (questions.length < 10) {
            setQuestions(
                [
                    ...questions,
                    {
                        num: (questions.length),
                        pergunta: "",
                        alternativas: {a: "", b: "", c:"", d:""},
                        resposta: "a"
                    }
                ]
            )
        }
    }

    function removeQuestion() {
        if (questions.length > 1) {
            setQuestions(questions.slice(0, (questions.length - 1)))
        }
    }

    return (
        <>
            {
                questions.map(question => {
                    return <Question questionNumber={question.num} questions={questions} setQuestions={setQuestions} />
                })
            }
            <input className={styles.addQuestionButton} type="button" value=" + Adicionar Questão" onClick={addQuestion}/>
            <input className={styles.removeQuestionButton} type="button" value="- Remover Questão" onClick={removeQuestion}/>
        </>
    )
}

export default CreateExam