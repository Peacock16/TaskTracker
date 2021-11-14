import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./AddTask";

function App() {
  const [addNewTask, setAddNewTask] = useState(false)
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: 'Meeting with clients',
      day: 'Feb 5, 2021, 3:30',
      reminder: true
    },
    {
      id: 2,
      text: 'Grocery Shopping',
      day: 'Dec 2, 2021, 5:30',
      reminder: false
    },
    {
      id: 3,
      text: 'Call the House manager',
      day: 'Dec 12, 2021, 1:20',
      reminder: true 
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setAddNewTask(!addNewTask)}
        showAdd={addNewTask}
      />
      { addNewTask && <AddTask addTask={addTask} />}
      { tasks.length > 0 ? 
        <Tasks tasks={tasks}
          deleteTask={deleteTask}
          onToggle={toggleReminder}
        />
        : 'No Tasks to Show'}
    </div>
  );
}

export default App;
