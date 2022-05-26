import React from 'react'
//style
import "../assets/styles/form.scss";

const Form = ({value,setValue,todos,setTodos}) => {

    
    const changeHandler = (e) => {
        setValue(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(value === ""){
            alert("Please Enter something")
        }else{
          setTodos([
            ...todos, {text:value , completed:false, id:Math.random()*1000}
        ]);
        setValue("");
        }
       
    }
  return (
    <form className='formContainer'>
        <input
         type="text"
         name="text"
         value={value}
         placeholder='Type here...'
         onChange={changeHandler}
        />
        <button type='submit' onClick={submitHandler}>Add</button>
    </form>
  )
}

export default Form;