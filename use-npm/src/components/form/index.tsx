import React, { useState } from "react";
import { Itasks } from "../../types/task";
import style from "./form.module.scss";
import {v4 as uuidv4} from "uuid";
import Button from "../button";

interface Props{
    setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>
}

export default function Form({setTasks}:Props){
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00:00");

    function saveTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        setTasks(oldTasks => [...oldTasks, {task, time, select: false, complete: false, id: uuidv4()}]);
        setTask("")
        setTime("00:00:00")
    }

    return (
        <form className={style.newTask} onSubmit={saveTask}>
            <div className={style.inputContainer}>
                <label htmlFor="tasks"> Adcione um novo Estudo: </label>
                <input required type="text" name="tasks" value={task} onChange={event => setTask(event.target.value)} id="tasks" placeholder="O que você quer estudar?" />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo: </label>
                <input required type="time" step="1" name="time" value={time} onChange={event => setTime(event.target.value)} id="time" min="00:00:00" max="01:30:00" />
            </div>
            <Button type="submit" text="Adcionar"/>
        </form>
    )
}
