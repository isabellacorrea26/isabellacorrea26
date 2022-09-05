import { useState } from "react"
import '../Styles/Llamada.css'

export const ComponentePrecioLlamada = () => {

    var [totalpagar, set] = useState('')
    const [minutos, setllamada] = useState('')
    const Setlla = (event) => {
        setllamada(event.target.value)
    }


    const pago = (minutos) => {

        if (minutos < 3) {
            const valor = 100
            set([valor])

        }
        else {
            const excedente = (minutos - 3) * 50
            const valor = 100 + excedente
            set([valor])
        }




    }

    return (
        <>
            <div className="body2">

                <div className="titulo2">
                    <h1>2. Ingrese lo que duró la llamada en minutos</h1>
                </div>

                <div className="input2">
                    <input type="text" onChange={(event) => Setlla(event)} value={minutos} class="form-control"/>
                    <p></p>
                    <button onClick={() => pago(minutos)} class="btn btn-primary btn-sm">Precio Llamada</button>
                    <p>El precio de la llamada es: {totalpagar} $</p>
                </div>
            </div>
        </>

    )

}