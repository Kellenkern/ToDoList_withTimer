import { Itasks } from "../../../types/task"
import style from "./item.module.scss"

interface Props extends Itasks{
    selectTask: (selectTask: Itasks) => void
}

export default function Item({task, time, select, complete, id, selectTask}: Props){
    return (
        <li className={`${style.item} ${select ? style.itemSelection:''} ${complete? style.itemCompleted:''}`} 
        onClick={()=> !complete && selectTask({task,time,select,complete,id})}>
            <h3>{task}</h3>
            <span>{time}</span>
            {complete && <span className={style.conclued}></span>}
        </li> 
    )
}