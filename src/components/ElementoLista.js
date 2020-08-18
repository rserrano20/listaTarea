import React from 'react';

const ElementoLista = (props) => {
    return (
    <li className="list-group-item d-flex justify-content-between">{props.nombreTarea}<button className="btn btn-danger" onClick={()=> props.borrarTarea(props.nombreTarea)}>Eliminar</button></li>
    );
};

export default ElementoLista; 