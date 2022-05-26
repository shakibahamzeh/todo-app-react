import {useState,useEffect} from "react";
import './App.css';
import Form from './components/Form';
import TodoList from "./components/TodoList";


function App() {
  const [value,setValue]=useState("");
  const [todos,setTodos] = useState([]);


  useEffect(()=>{
    getLocalTodo();
  },[]);
 
  useEffect(()=>{
    saveLocalTodo();
  })

  //save

  const saveLocalTodo = () => {
    if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos' , JSON.stringify([]))
    }else{
      localStorage.setItem('todos' , JSON.stringify(todos))
    }
  }
  const getLocalTodo = () => {
    if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos' , JSON.stringify([]))
    }else{
      let toLocal= JSON.parse(localStorage.getItem("todos"));
      setTodos(toLocal);
    }
  }



  return (
    <div className="App">
      <Form value={value} setValue={setValue} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
