import { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = ({children}) => {
const [selectedQuestion, setSelectedQuestion] = useState("");
const [correctQuestion, setCorrectQuestion] = useState("");

  const completeQuestion = (selectedQuestion, correctQuestion) => {
    setSelectedQuestion(selectedQuestion);
    setCorrectQuestion(correctQuestion);

    if(selectedQuestion === correctQuestion) {
      console.log("Acertou!!!!")
    } else {
      console.log("Errou!!")
    }
  }

  return(
    <QuestionContext.Provider value={{selectedQuestion, correctQuestion, completeQuestion}}>
      {children}
    </QuestionContext.Provider>
  )
}