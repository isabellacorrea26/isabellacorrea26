
import { useEffect, useState } from "react"
import '../Styles/ListaNumero.css'


export const Componentlistanumeros = ({ lista }) => {

    useEffect( () => {
        console.log( lista )
        setLista2([...lista]);
    }, [lista])


    const [cnumero, setnum4] = useState('')
    const [lista2, setLista2] = useState([ ...lista])

    const Set4 = (event) => {
        setnum4(event.target.value)
    }
    
    const onComponentlistanumeros = () => {

        const lista3 = [...lista2, cnumero];


        setLista2(lista3)
    }


    return (

        <>
            <div className="titulo5">
                <h1>5. Ingrese otro número</h1>
            </div>

            <div className="input5">
                <input type="text" onChange={(event) => Set4(event)} value={cnumero} placeholder="num4" class="form-control"/>

                <p> { JSON.stringify(lista2) } </p>
                <button onClick={() => onComponentlistanumeros()} class="btn btn-primary btn-sm">Lista ordenada</button>
            </div>

        </>

    )

}
