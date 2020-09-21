import React, { createContext, useState } from 'react';

// Crear el Context
export const CategoriasContext = createContext();

// Creando el Provider (donde se encuentran las funciones y state)
const CategoriasProvider = (props) => {


    // crear el state del Context
    const [ hola, guardarHola ] = useState('hola desde state');


    return (
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;