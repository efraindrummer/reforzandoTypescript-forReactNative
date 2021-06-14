import React from 'react'
import { ObjetosLiterales } from './typescript/ObjetosLiterales'
//import { TiposBasicos } from './typescript/TiposBasicos';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      <ObjetosLiterales />
    </div>
  )
}

export default App;