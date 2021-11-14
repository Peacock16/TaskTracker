import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: 'Meeting with clients',
      day: 'Feb 5, 2021',
      reminder: true
    },
    {
      id: 2,
      text: 'Grocery Shopping',
      day: 'Dec 2, 2021',
      reminder: false
    },
    {
      id: 3,
      text: 'Call the House manager',
      day: 'Dec 12, 2021',
      reminder: true 
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? 
        <Tasks tasks={tasks}
          deleteTask={deleteTask}
          onToggle={toggleReminder}
        />
        : 'No Tasks to Show'}
    </div>
  );
}

export default App;
