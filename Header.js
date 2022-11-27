import React from "react"
import Logo from './img/softex.jpg'


export default function Header(props){
    return(
        <header>
            <img src ={Logo}/>
        <p><b>{props.empresa}</b></p>

    </header>
    )   
}


