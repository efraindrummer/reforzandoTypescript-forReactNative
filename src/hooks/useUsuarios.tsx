import { useEffect, useRef, useState } from "react";
import { resResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        //llamado de la api
        cargarUsuarios();
    }, []);

    
    const cargarUsuarios = async () => {
        //Llamado al API
        const resp = await resResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });
        
        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);
        }else{
            paginaRef.current --;
            alert('No hay mas registros');
        }
    }

    const paginaSiguiente = () => {
        cargarUsuarios();
        paginaRef.current ++;
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente,
    }
}
