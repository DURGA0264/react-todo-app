import React from 'react'
// import './TodoItems.css'

const TodoItems = ({todoData,deleteTask,index,toggle}) => {

  const handleDelte=()=>{
    if(todoData.completed){
      deleteTask(index)
    }else{
      alert("Please Complete your Task !")
    }

  }
   
  return (
    <div id='todo_items_parent'>
      <div id='todo_items_container'>
        <input type="checkbox" id='check_boxs_true'  checked={todoData.completed} onChange={()=>toggle(index)} />
         <h1 id='User_data' className={todoData.completed ? 'completed' : ''}>
            {todoData.text}
         </h1>
        <button id="deltebtn" onClick={handleDelte}>Delete</button>
    
      </div>
    </div>
  )
}

export default TodoItems