// ./client/src/components/Guitars/index.js
import React, { useEffect, useContext } from 'react';
import StoreContext from './../../context/Store/StoreContext';

export default function Stores() {
    // ESTADO GLOBAL
    const ctx = useContext(StoreContext);

    const { stores, hola, changeText } = ctx;

    // ESTADO LOCAL

    return (
        <>
            <p>Listado de stores</p>
            <p>{hola}</p>

            <button
                onClick={() => {
                    changeText();
                }}
            >
                Cambiar texto de store
            </button>
        </>
    );
}
