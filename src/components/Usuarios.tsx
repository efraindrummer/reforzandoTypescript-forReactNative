import { useState } from 'react';
import { useEffect } from 'react';
import { resResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        //Llamado al API
        resResApi.get<ReqResListado>('/users')
            .then( resp => {
                console.log(resp.data.data);
            }).catch(console.log)
    }, [])

    return (
        <>
            <h3>Usuarios</h3> 
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>  
        </>
    )
}
