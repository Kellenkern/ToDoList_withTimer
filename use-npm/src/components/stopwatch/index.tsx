import { useEffect, useState } from "react"
import timeToSec from "../../common/utils/time"
import { Itasks } from "../../types/task"
import Button from "../button"
import Clock from "./clock"
import style from "./stopwatch.module.scss"

interface Props{
    select:Itasks | undefined,
    endTask: () => void
}

export default function Stopwatch ({select, endTask}:Props){
    const[time, setTime] = useState<number>();
    useEffect( () => {if(select?.time){setTime(timeToSec(select.time))}}, [select]);

    function regressive(cont: number = 0){
        setTimeout(()=>{if (cont > 0){setTime(cont-1); return regressive(cont-1)} endTask(); }, 1000)
    }

    return(
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronometro</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <div>
                <Button onClick={() => regressive(time)} text="Começar"/>
            </div>
        </div>
    )
}