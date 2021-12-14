// ./client/src/context/Guitar/GuitarState.js

// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from 'react';
import StoreContext from './StoreContext';

import StoreReducer from './StoreReducer';

const StoreState = props => {
    // 1. INITIAL STATE (ESTADO INICIAL)
    const initialState = {
        stores: [],
        hola: 'store',
    };

    // 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
    // REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
    const [globalState, dispatch] = useReducer(StoreReducer, initialState);

    // 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
    const changeText = () => {
        dispatch({
            // ESTE OBJETO SE LE CONOCE COMO ACTION
            type: 'CHANGE_TEXT',
            payload: 'Cambiando el texto para el store.',
        });
    };

    // 4. RETORNO
    return (
        <StoreContext.Provider
            value={{
                stores: globalState.stores,
                hola: globalState.hola,
                changeText,
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreState;
