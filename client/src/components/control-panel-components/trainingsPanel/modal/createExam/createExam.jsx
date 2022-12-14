
import { useEffect } from "react"
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
            <input type="button" value="+" onClick={addQuestion}/>
            <input type="button" value="-" onClick={removeQuestion}/>
        </>
    )
}

export default CreateExam