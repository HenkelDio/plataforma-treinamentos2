export default function InputBoxQuestion(props){

  console.log("box:", props)

  return(
    <>
    <input 
    type="radio" 
    name="question" 
    value={props.data}></input>
    <label htmlFor="question1">{props.data}</label>
    </>
  )
}