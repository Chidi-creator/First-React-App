import { useState, useEffect } from "react";
import Overview from "./components/overview";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputs, setInputs] = useState("");
  const [id,setId] = useState(0)

  const handleChange = (event) => {
    setInputs(event.target.value);
  };
  const newTasks = {
    task: inputs,
    id: id
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, newTasks]);
    setInputs("");
    setId(id + 1)
  };

  const handleDelete = (id) =>{
    const updadtedItems = tasks.filter(task => task.id !== id)
    setTasks(updadtedItems)
  }

  useEffect(()=>{
console.log(tasks)
  },[tasks])

  const renderItems = tasks.map((task) => {
    return(
      <div className="listed">
        <li key={task.id}>{task.task}</li>
        <button onClick={() => handleDelete(task.id)}>delete</button>
      </div>

    ) 
  });

  return (
    <div className="App">
      <h1>My First React Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="inp-div">
        <input type="text" value={inputs} onChange={handleChange} />
        </div>
      
        <div className="btn-div">
          <button type="submit">submit</button>
        </div>
      </form>

      <div>
        <Overview renderItems={renderItems} />
      </div>
    </div>
  );
}

export default App;
