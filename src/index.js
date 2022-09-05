import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//1
import {ComponenteHora} from './components/ComponenteHora';
//2
import {ComponentePrecioLlamada} from './components/ComponentePrecioLlamada';
//3
import {ComponenteNombreHora} from './components/ComponenteNombreHora';
//4
import {ComponenteTresNumeros} from './components/ComponenteTresNumeros';
//5
import {Componentelistanumeros} from './components/Componentlistanumeros';
//6
import {ComponenteNumerosImpares} from './components/ComponenteNumerosImpares';
//7
import {ComponenteSalarios} from './components/ComponenteSalarios';
//8
import {ComponenteNumeroAleatorio} from './components/ComponenteNumeroAleatorio';
//9
import {ComponenteMatriz} from './components/ComponenteMatriz';
//11
import {ComponenteNombreAlumno} from './components/ComponenteNombreAlumno';
//12
import {ComponenteVariosAlumnos} from './components/ComponenteVariosAlumnos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <ComponenteHora/>
      <ComponentePrecioLlamada/>
      <ComponenteNombreHora/>
      <ComponenteTresNumeros/>
      <ComponenteNumerosImpares/>
      <ComponenteSalarios/>
      <ComponenteNumeroAleatorio/>
      <ComponenteMatriz/>
      <ComponenteNombreAlumno/> 
      <ComponenteVariosAlumnos/> 
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
