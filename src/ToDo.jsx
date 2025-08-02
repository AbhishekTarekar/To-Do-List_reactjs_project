import React,{useState} from "react";

function ToDo(){
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')

    function handalTask(event){
        setNewTask(event.target.value);
        
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTask(t =>[...t,newTask])
            setNewTask('')
        }
    }

    function deleteTask(index){
        const upTask = task.filter((_,i) => i !== index)
        setTask(upTask)

    }


    return(
        <div className="todo_contenar">
            <h1>To-Do-List</h1>
            <div className="todoAdd">
                <input type="text" 
                placeholder="Add NewTask.."
                value={newTask}
                onChange={handalTask}
                />
                <button
                 className="addButtn"
                 onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {
                    task.map((tasks,index)=>
                        <li key={index}>
                            <span className="text">{tasks}</span>
                            <button className="delete_buttn"
                            onClick={() => deleteTask(index)}
                            >Delete</button>
                        </li>
                    )
                }
            </ol>

        </div>
    )
}

export default ToDo;