
import {  useNavigate } from "react-router-dom"
const Choices = (props) =>{
    const {item,correctAnswer} = props
    const navigator = useNavigate()
    const choiceSelecting = () =>{
        if(item===correctAnswer){
            navigator("/success")
            
        }else{
            navigator("/feedback")
        }
    }

    return(
        <div  className='choices'>
            <label htmlFor={item}>{item}</label>
            <input onChange={choiceSelecting} id={item} type='radio' name='answer' />
        </div>
    )
}
export default Choices