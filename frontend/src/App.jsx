import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [priority, setPriority] = useState('medium');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleCompletedChange = (e) => {
    setCompleted(e.target.value);
  };
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/tasks');
      const result = await response.json();
      console.log(Object.values(result));
      setTasks(Object.values(result));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createTask = async (title, description, completed, priority) => {
    try {
      const response = await fetch('http://localhost:4000/api/tasks',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          completed: completed,
          priority: priority,
        })
      });
      const result = await response.json();
    } catch (error) {
      console.error('Error creating task:', error);
    }
    fetchTasks();
  };
  
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/tasks/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      const result = await response.json();
      fetchTasks();
      
    } catch (error) {
      console.error('Error creating task:', error);
    }
    
    
  };

  const updateTask = async (title, description, completed, priority) => {
    try {
      const response = await fetch(`http://localhost:4000/api/tasks/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          completed: completed,
          priority: priority,
        })
      });
      const result = await response.json();
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
    
  };

  const toggleTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/tasks/${id}/toggle`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const result = await response.json();
    } catch (error) {
      console.error('Error creating task:', error);
    }
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <>
    <h1>Tasks</h1>

      <div className='tasks-container'>
        {tasks.map((task) => (
          <div key={task.id} className='task-card'>
            <h2>{task.title}</h2>
            <div>ID: {task.id}</div>
            <div>Description: {task.description}</div>
            <div>Completed: {task.completed.toString()}</div>
            <div>Created At: {task.createdAt.toLocaleString()}</div>
            <div>Priority: {task.priority}</div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            {/* <button onClick={() => updateTask(task.id)}>Update</button> */}
            <button onClick={() => toggleTask(task.id)}>Toggle</button>
          </div>
        ))}
      </div>

      <form className='create-task-form'>
        <label>Title</label>
        <input value={title} onChange={e => handleTitleChange(e)} />
        <label>Description</label>
        <input value={description} onChange={e => handleDescriptionChange(e)} />
        <label>Completed</label>
        <input value={completed} onChange={e => handleCompletedChange(e)} />
        <label>Priority</label>
        <input value={priority} onChange={e => handlePriorityChange(e)} />
        <button onClick={() => createTask(title, description, completed, priority)}>Create Task</button>
      </form>

    </>
  )
}

export default App
