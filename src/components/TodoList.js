import React from 'react'
import Todo from './Todo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//style
import "../assets/styles/todoList.scss";

const TodoList = ({ todos, setTodos }) => {
  return (
    <TransitionGroup component="ul" className='listContainer'>
      {
        todos.map(todo => (
          <CSSTransition key={todo.id} timeout={200} classNames="todoTransition">
            <Todo
              // key={todo.id}
              id={todo.id}
              value={todo.text}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          </CSSTransition>)
        )
      }
    </TransitionGroup>
  )
}

export default TodoList;