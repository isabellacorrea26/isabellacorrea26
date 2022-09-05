import { useState } from "react"
import '../Styles/Hora.css'


export const ComponenteHora=()=>{
   
    var [horaCambiada, set] = useState('')
    const[seg,setseg] = useState('')
    const Setsegundo= (event) =>{
        setseg(event.target.value)
    }

    const CambiarSeg=(seg) =>{
        
        var hour = Math.floor(seg/ 3600);
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor((seg / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seg % 60;
        second = (second < 10)? '0' + second : second;
        const Formato= hour + ':' + minute + ':' + second;
        console.log(Formato)
        set([Formato])
   

    }
     
    return(
        <>

        <div className="body">
            <div className="titulo">
                <h1>1. Digite la cantidad en segundos que desea convertir: </h1>
             </div>

            <div className="input">
                <input type="text" onChange={(event)=> Setsegundo(event)} value={seg} class="form-control"/>
                <p></p>
                <button  onClick={() =>CambiarSeg(seg)} class="btn btn-primary btn-sm">Convertir</button>
                <p>{horaCambiada}</p>
            </div>

        </div>
        </>

    )
}