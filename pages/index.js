import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender Next.js", completed: false },
    { id: 2, text: "Dockerizar la app", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Lista de Tareas (Actividad)</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "completed" : ""}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}