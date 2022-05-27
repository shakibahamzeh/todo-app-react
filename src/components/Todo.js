import React from 'react';

//style
import "../assets/styles/todo.scss";


const Todo = ({value,todos,todo,setTodos}) => {
    
    //remove todo
    const removeHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
    }

    // checked todo
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
            <div className='todoTextContainer'>
                <div onClick={checkedHandler} className="checkIcon">
                    <div className={todo.completed ? 'checkShowWrapper' : ''}>
                        <span className={todo.completed ? 'icon-check' : ''}></span>
                    </div>
                </div>
            <p onClick={checkedHandler} className={`text ${todo.completed ? "completed" : ""}`}>{value}</p>
            </div>
            <div onClick={removeHandler} className="removeIcon">
                <span className='icon-trash'></span>
            </div>
    </li>
  )
}

export default Todo;