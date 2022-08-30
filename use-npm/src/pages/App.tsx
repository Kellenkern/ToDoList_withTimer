import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import { Itasks } from '../types/task';
import style from "./app.module.scss";

function App() {
  const [tasks, setTasks] = useState<Itasks[]>([]);
  const [select, setSelect] = useState<Itasks>();

  function selectTask(selectTask: Itasks){
    setSelect(selectTask);
    setTasks(oldTask => oldTask.map(task => ({...task, select:task.id === selectTask.id ? true : false})));
  }

  function endTask() {
    if (select){
      setSelect(undefined);
      setTasks(oldTask => oldTask.map(task => {
        if (task.id === select.id){return{...task, select: false, complete: true}} return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} selectTask={selectTask}/>
      <Stopwatch select={select} endTask={endTask}/>
    </div>
  );
}

export default App;
