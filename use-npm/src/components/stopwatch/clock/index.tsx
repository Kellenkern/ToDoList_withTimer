import style from "./clock.module.scss"

interface Props{
    time: number | undefined
}

export default function Clock({time=0}:Props){
    const min = Math.floor(time/60);
    const sec = time % 60;
    const [Dmin, Umin] = String(min).padStart(2,'0');
    const [Dsec, Usec] = String(sec).padStart(2,'0');

    return(
        <>
            <span className={style.clockNumber}>{Dmin}</span>
            <span className={style.clockNumber}>{Umin}</span>
            <span className={style.clockDiv}>:</span>
            <span className={style.clockNumber}>{Dsec}</span>
            <span className={style.clockNumber}>{Usec}</span>
        </>   
    )
}