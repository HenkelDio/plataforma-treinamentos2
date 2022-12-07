export default function InputBoxQuestion(props){

  console.log(props)

  return(
    <>
    <input 
    type="radio" 
    name={`question`+props.data} 
    value={props.data}></input>
    <label htmlFor="question1">{props.data}</label>
    </>
  )
}