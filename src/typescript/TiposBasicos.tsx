import React from 'react'

export const TiposBasicos = () => {

    const nombre: string = 'Efrain';
    const edad: number = 35;
    const estaActivo: boolean = true;

    const poderes: string[] = []; //'Velocidad','Volar','Respirar en Agua'

    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <br />
            {poderes.join(', ')}
        </>
    )
}
