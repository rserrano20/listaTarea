import React from 'react';

const Subtitulo = (props) => {
    return (
        <div className="text-center">
            <h4>Tarea de la comision {props.comision} - {props.anio}</h4>
            <p className="lead">{props.frase}</p>
             
        </div>
    );
};

export default Subtitulo;

// function Subtitulo (){ ...}
// window.Subtitulo = function () { .... }

// const Subtitulo = () => { ... }