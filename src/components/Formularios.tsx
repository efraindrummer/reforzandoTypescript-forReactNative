import React, { useState } from 'react'

export const Formularios = () => {

    const [formulario, setFormulario] = useState({
        email: 'test@test.gmail.com',
        password: '123456'
    });

    const onChange = (value: string, campo: string) => {
        setFormulario({
            ...formulario,
            [campo]: value
        });
    }

    return (
        <>
            <h3>Formularios</h3>   
            <input 
                type="text" 
                className="form-control"
                placeholder="Email"
                value={formulario.email}
                onChange={({target}) => onChange(target.value , 'email')}
            />

            <input 
                type="text" 
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={formulario.password}
                onChange={({target}) => onChange(target.value , 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}
