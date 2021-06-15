import React from 'react'
import { Formularios } from './components/Formularios'
//import { ContadorConHook } from './components/ContadorConHook'
//import { Contador } from './components/Contador'
//import { Funciones } from './typescript/Funciones'
//import { ObjetosLiterales } from './typescript/ObjetosLiterales'
//import { TiposBasicos } from './typescript/TiposBasicos';
//import { Login } from './components/Login';
//import { Usuarios } from './components/Usuarios';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      {/* <Usuarios /> */}
      <Formularios />
    </div>
  )
}

export default App;