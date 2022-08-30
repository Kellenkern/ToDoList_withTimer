import { Itasks } from "../../types/task"
import Item from "./item"
import style from "./list.module.scss"

interface Props {
    tasks: Itasks[],
    selectTask: (selectTask: Itasks) => void

}

export default function List({tasks, selectTask}:Props){
    return(
        <aside className={style.tasksList}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tasks.map((item)=> (
                     <Item selectTask={selectTask} key={item.id}  {...item} />  // ou pode ser feito da seguinte maneira - task={item.task} time={item.time}/> - essa é a maneira descritiva, mas o ...item é a maneira resumida, onde o objeto item já possui as propriedades.                 
                ))}
            </ul>
        </aside>
    )
}
