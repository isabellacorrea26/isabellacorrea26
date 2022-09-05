import { useState } from "react"
import '../Styles/Alumno.css'
export const ComponenteVariosAlumnos = () => {
    const [name, setnam] = useState('')
    const [nota1, setnum1] = useState('')
    const [nota2, setnum2] = useState('')
    const [nota3, setnum3] = useState('')



    const [alumnos, setAlumnos] = useState([])

    const setName = (event) => {
        setnam(event.target.value)
    }

    const setn1 = (event) => {
        setnum1(event.target.value)
    }

    const setn2 = (event) => {
        setnum2(event.target.value)
    }
    const setn3 = (event) => {
        setnum3(event.target.value)
    }

    const calcularNota = () => {
        const Alumno = {
            nombre: name,
            n1: nota1,
            n2: nota2,
            n3: nota3,
            suma: 0.0
        }
        console.log(Alumno)
        Alumno.suma = (Alumno.n1 * .3) + (Alumno.n2 * .3) + (Alumno.n3 * .4)

        setAlumnos([...alumnos, Alumno])
    }


    return (

        <>
            <div className="body10">
                <div className="titulo10">
                    <h1>12. Digite el nombre de lo estudiante</h1>
                </div>
                
                <div className="input10">
                    <input type="text" onChange={(event) => setName(event)} value={name} placeholder="Nombre" class="form-control" />
                    <h2>Digite las tres notas: </h2>
                    <input type="text" onChange={(event) => setn1(event)} value={nota1} placeholder="Nota 1" class="form-control" />
                    <input type="text" onChange={(event) => setn2(event)} value={nota2} placeholder="Nota 2" class="form-control" />
                    <input type="text" onChange={(event) => setn3(event)} value={nota3} placeholder="Nota 3" class="form-control" />
                    <p>Nota 1 vale el 30% de la materia</p>
                    <p>Nota 2 vale el 30% de la materia</p>
                    <p>Nota 2 vale el 40% de la materia</p>
                    <button onClick={() => calcularNota()} class="btn btn-primary btn-sm">Calcular</button>
                    <p> La nota final  de {alumnos.name} es: {alumnos.suma} </p>
                </div>

            </div>
        </>

    )
}