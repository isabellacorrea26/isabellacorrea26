import { useState } from "react"
import { Componentlistanumeros } from "./Componentlistanumeros"
import '../Styles/Numeros.css'

export const ComponenteTresNumeros = () => {

    var [sal, set] = useState('')
    const [num1, setnum1] = useState('')
    const [num2, setnum2] = useState('')
    const [num3, setnum3] = useState('')



    const [categories, addCat] = useState([])

    const Set1 = (event) => {
        setnum1(event.target.value)
    }

    const Set2 = (event) => {
        setnum2(event.target.value)
    }
    const Set3 = (event) => {
        setnum3(event.target.value)
    }

    const onComponentlistanumeros = (category) => {
        addCat([...categories, category])
    }

    const numerosIguales = () => {
        addCat([...categories, num1, num2, num3 ])

        if (num1 == num2 == num3) {
            const nums = 'Los ' + 3 + ' números son iguales.'
            set(nums)
        }

        else if ((num1 == num2) || (num2 == num3) || (num2 == num3)) {
            const nums = 'Hay ' + 2 + ' números iguales.'
            set(nums)
        }

        else if (num1 != num2 != num3) {
            const nums = 'No hay números iguales'
            set(nums)
        }
    }

    return (

        <>
            <div className="body4">
                <div className="titulo4">
                    <h1>4. Digite los tres números</h1>
                </div>
                
                <div className="input4">
                    <input type="text" onChange={(event) => Set1(event)} value={num1} placeholder="Num 1" class="form-control" />
                    <input type="text" onChange={(event) => Set2(event)} value={num2} placeholder="Num 2" class="form-control"/>
                    <input type="text" onChange={(event) => Set3(event)} value={num3} placeholder="Num 3" class="form-control" />
                    <p></p>
                    <button onClick={() => numerosIguales()} class="btn btn-primary btn-sm">Contar numeros Iguales</button>
                    <p>{sal}</p>
                    <p></p>
                    <p>{categories}</p>
                </div>
                
                <Componentlistanumeros lista={categories} onComponentlistanumeros={onComponentlistanumeros} />
            </div>
        </>

    )

}
