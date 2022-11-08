import { useState } from 'react';
import Form from './components/Form';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2.30pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Feb 6th at 1.30pm',
          reminder: true
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: 'Feb 5th at 2.30pm',
          reminder: false
      }
  ])

  // Delete a Task
  const deleteTask = (id) => {
    setTasks( tasks.filter( (task) => task.id !== id ) );
  }

  // Toggle Reminders
  const toggleReminder = (id) => {
    setTasks(
      tasks.map( (task) => task.id === id ? {...task, reminder: !task.reminder} : task )
    )
  }

  // Add new Task
  const addNewTask = (taskDetails) => {
    const id = tasks.length + 2;
    const newTask = {id, ...taskDetails};

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <main className="container">
        <Header toggleForm={() => setShowForm(!showForm)}/>
        {showForm && <Form onAdd={addNewTask} /> }
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks to show right now."}
      </main>
    </div>
  );
}

export default App;