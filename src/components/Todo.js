import React from 'react';

//style
import "../assets/styles/todo.scss";


const Todo = ({value,todos,todo,setTodos}) => {
    //remove 
    const removeHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
    }

    // checked
    const checkedHandler = () => {
        setTodos(todos.map(item => {
           if(item.id === todo.id){
               return{
                   ...item, 
                   completed: !item.completed
               }
           }
            return item;
        })
        );
    };
  return (
    <li className='todoListContainer'>
       <button onClick={checkedHandler} className="checkIcon">
           <span className='icon-check'></span>
       </button>
       <div className={`text ${todo.completed ? "completed" : ""}`}>{value}</div>
       <button onClick={removeHandler} className="removeIcon">
            <span className='icon-trash'></span>
        </button>
    </li>
  )
}

export default Todo;