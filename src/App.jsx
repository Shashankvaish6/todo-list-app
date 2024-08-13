import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  // const [completetodos, setCompletetodos] = useState([])
  useEffect(() => {
    let s = localStorage.getItem("todos");
    if(s){
      let lol = JSON.parse(localStorage.getItem("todos"))
      
      setTodos(lol)

    }
  
    
  }, [])
  
  const getls =()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const handlechange = (e)=>{
    setTodo(e.target.value)
    getls()

  }
  const handleadd=()=>{
    
    setTodos([...todos,{id:uuidv4(), todo , isCompleted:false}])
    setTodo('')
    getls()

  }
  const handlecomplete=(e)=>{

    let id = e.target.name
    // console.log(id)
    let index = todos.findIndex((item)=>{
      return item.id===id
    })
    // console.log(index)
    let newtodos = [...todos]
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    setTodos(newtodos)
    console.log(newtodos)

    // for completed todos
    // if(newtodos[index].isCompleted===true){
    //   setCompletetodos([...completetodos,{todo,key:id}])
    // }
    getls()
    

    
  }
  const handledelete=(e,id)=>{
    let u = todos.filter(item=>{ return item.id!==id})
    setTodos(u)
    getls()

  }
 
  

  return (
    <>
    <Navbar/>
    <div className="todo-app">
        <h1 className="app-title">My To-Do List</h1>
        <div className="input-container">
            <input type="text" id="new-task" value={todo} onChange={handlechange} placeholder="Enter a new task"/>
            <button id="add-task-button" onClick={handleadd}>Add Task</button>
        </div>
        {todos.map((item)=>{
        return (<ul className="todo-list" key={item.id}>
            {/* <!-- Example of a task item --> */}
            {!item.isCompleted && 
            
             <li className="todo-item">{item.todo}
             <input type="checkbox" name={item.id} onClick={handlecomplete} id="" />
             <button className="complete-task-button"  >Complete</button>
              <button className="delete-task-button" onClick={(e)=>{handledelete(e,item.id)}}>Delete</button></li> 
        }
        </ul>
        )
        })}
        <h1 className='toggle-completed-button'>complete task</h1>
        {todos.map((item)=>{
          return(<ul className="todo-list" key = {item.id}>
            {item.isCompleted && 
            <li className="todo-item">{item.todo}</li>
            }

          </ul>
            
          )
        })}

        
    </div>
     
    </>
  )
}

export default App
