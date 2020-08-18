import React from 'react';
import ElementoLista from './ElementoLista';

const Lista = (props) => {
    return (
        <ul className="list-group">
                { props.tareasEnviar.map((item,indice)=> <ElementoLista key={indice} nombreTarea={item} borrarTarea={props.borrarTarea}></ElementoLista>)
                }    
        </ul>
    );
};

export default Lista;