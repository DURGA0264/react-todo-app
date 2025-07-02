import React, {  useState } from "react";
import TodoItems from "./components/TodoItems";
import './App.css'
function App(){
    const [inputData,setInputData]=useState("")
    const [newData,setNewData]=useState([])
    const data=(e)=>{
        setInputData(e.target.value)
    }
    const handleAdd=()=>{
        if (inputData.trim() !== ""){
          setNewData([...newData,{text:inputData,completed:false}])
          setInputData("")
          
        }else{
            alert("Please Enter Your Task !")
        }
    };
    const toggle=(index)=>{
        const update=newData.map((task,i)=>{
            if (index===i){
                return {...task,completed:!(task.completed)}
            }
            return task
        })
        setNewData(update)
    }
    const deleteTask= (index) => {
            const updatedTasks = newData.filter((item, i) => index !== i );
            setNewData(updatedTasks);
    }
    return(
         <div id="app_container">
            <div id="heading_container"><h1> &#128221; MY TODO LIST</h1></div>
            <div className="input_addbtn_container">
              <input type="text"  value={inputData}  autoFocus onChange={data} placeholder="Enter Your Task !" id="task_inputbox"/>
              <button onClick={handleAdd} id="add_button">ADD</button>
            </div>
          {newData.map((item,index)=>{
             return <TodoItems key={index} todoData={item} index={index} deleteTask={deleteTask} toggle={toggle}/>
          })}

       </div>
    )
}
export default App;