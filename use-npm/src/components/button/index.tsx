import React from "react";
import style from "./button.module.scss"

interface Props{
    onClick?: ()=>void,
    type?: "button" | "submit" | "reset" | undefined,
    text: String,
}

export default function Button({onClick, type, text}:Props){
    return(
        <button onClick={onClick} type = {type} className={style.button}>{text}</button>
    )
}

// Essa seria outra opção mais antiga usando classes, hoje em dia se usa functions.

// class Button1 extends React.Component<{text: string, type?: "button" | "submit" | "reset" | undefined, onClick?:()=>void}>{
//     render() {
//         return (
//             <button onClick={this.props.onClick} type = {this.props.type} className={style.button}>{this.props.text}</button>
//         )
//     }
// }

// export default Button;