import React from "react";
import AddTaskForm from './components/AddTaskForm';
import UpdateFrom from './components/UpdateForm';
import ToDo from './components/ToDo';
import './App.css';
import { } from '@fortawesome/react-fontawesome';
import { useState } from "react";


function App() {

  const [toDo, setToDo] = useState([])
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addTask = () => {
    if (newTask) {
      // let num = toDo.length + 1;
      let newEntry = { id: Math.random().toString(), title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }
  const markDone = (id) => {
    const newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }
  const cancelUpdate = () => {
    setUpdateData('');
  }
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <h1>To do list</h1>

      {/* update task */}
      {updateData && updateData ? (
        <UpdateFrom
          updateData={updateData}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}
          updateTask={updateTask}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}


      {toDo && toDo.length ? '' : 'No tasks...'}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask} />

    </div>
  );
}

export default App;
