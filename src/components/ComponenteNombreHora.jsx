import { useState } from "react"
import '../Styles/NombreHora.css'

export const ComponenteNombreHora = () => {

    var [sal, set] = useState('')
    const [nombre, setnombre] = useState('')
    const [hora, sethora] = useState('')
    const [minutos, setmin] = useState('')
    const Setn = (event) => {
        setnombre(event.target.value)
    }

    const Seth = (event) => {
        sethora(event.target.value)
    }
    const Setm = (event) => {
        setmin(event.target.value)
    }


    const Saludo = (nombre, hora) => {


        if (hora > 6 && hora <= 12) {
            const tiempo = 'Buenos Dias' + " " + nombre

            set(tiempo)
        }

        if (hora > 12 && hora <= 18) {
            const tiempo = 'Buenos Tardes ' + " " + nombre
            set(tiempo)
        }

        if (hora > 18 && hora <= 24) {
            const tiempo = 'Buenos Noches ' + nombre
            set(tiempo)
        }


    }

    return (

        <>
            <div className="body1">
                <div className="titulo1">
                    <h1>3. Ingresa tu nombre</h1>
                </div>
                <div className="input1">
                    <input type="text" onChange={(event) => Setn(event)} value={nombre} class="form-control"/>
                </div>
                <div className="titulo1">
                    <h1>Ingresar Hora</h1>
                </div>
                <div className="input1">
                    <input type="text" onChange={(event) => Seth(event)} value={hora} placeholder="Hora" class="form-control"/>
                    <input type="text" onChange={(event) => Setm(event)} value={minutos} placeholder="Minuto" class="form-control"/>
                </div>
                <p></p>
                <div className="input1">
                <button onClick={() => Saludo(nombre, hora)} class="btn btn-primary btn-sm">Saludar</button>
                <p></p>
                <p>{sal}</p>
                </div>
                
            </div>
        </>

    )
}