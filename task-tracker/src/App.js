import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: 'Meeting with clients',
      day: 'Feb 5, 2021'
    },
    {
      id: 2,
      text: 'Grocery Shopping',
      day: 'Dec 2, 2021'
    },
    {
      id: 3,
      text: 'Call the House manager',
      day: 'Dec 12, 2021'
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} deleteTask={deleteTask} />
        : 'No Tasks to Show'}
    </div>
  );
}

export default App;
