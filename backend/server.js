import express from "express";
import cors from "cors";
// {
// id: number,
// title: string,
// description: string,
// completed: boolean,
// createdAt: Date,
// priority: 'low' | 'medium' | 'high'
// }
let id = 0;
let tasks = {}; 

const checkTaskExists = (id) => {
  if (tasks[id]) {
    return true;
  }
  return false;
};

const app = express().use(cors()).use(express.json());
const port = 4000;

app.get('/api/tasks', (req, res) => {
  res.send(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title, description, completed, priority } = req.body;
  const task = { id: ++id, title, description, completed, createdAt: new Date().toLocaleString(), priority };
  tasks[id] = task;
  res.status(200).send(task);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  if (checkTaskExists(id)) {
    const { title, description, completed, priority } = req.body;
    tasks[id] = { id, title, description, completed, createdAt:tasks[id][createdAt], priority };
    res.status(200).send(task);
  } else {
    res.status(404).send({ message: 'Task not found' });
  }
});


app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  if (checkTaskExists(id)) {
    delete tasks[id];
    res.status(200).send({ message: 'Task deleted' });
  } else {
    res.status(404).send({ message: 'Task not found' });
  }
});

app.patch('/api/tasks/:id/toggle', (req, res) => {
  const { id } = req.params;
  tasks[id]["completed"] = !tasks[id]["completed"];
  res.status(200).send(tasks[id]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
