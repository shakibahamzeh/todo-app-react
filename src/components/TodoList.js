import React from 'react'
import Todo from './Todo';

//style
import "../assets/styles/todoList.scss";

const TodoList = ({todos,setTodos}) => {
  return (
    
       <ul className='listContainer'>
           {
               todos.map( todo =>
               <Todo
                 key={todo.id} 
                 id={todo.id} 
                 value={todo.text}
                 todo={todo}
                 todos={todos}
                 setTodos={setTodos}
                 />)
                   
           }
       </ul>
   
  )
}

export default TodoList;