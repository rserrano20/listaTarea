import React, { useState, Fragment,useEffect } from "react";
import Lista from "./Lista";

const Fomulario = () => {
  //vamos a crear el State

  //un parametro es el nombre del state y el otro la funcion que guardara
  //los dos parametros son ELEGIDOS POR NOSOTROS!
  const [tareas, setTareas] = useState([]); //en () ira como queremos que inicialice, por ej 0, false, [], etc
  const [tarea, setTarea] = useState(""); //este sera un string
  const [inicio,setInicio]= useState(true);
  //ciclo de vida de un componente-sintaxis de useefect
  useEffect(() =>{
    if(inicio){
      //etapa de montaje en cdcomponente
      console.log("el componente fue montado");
      let tareasGuardadas = JSON.parse(localStorage.getItem("listaTareas"));
      if(tareasGuardadas){
        setTareas(tareasGuardadas);
      }
      setInicio(false);
    }
    //etapa de actualizacion
   
    console.log("el componente fue actualizado");
    localStorage.setItem("listaTareas",JSON.stringify(tareas));
  },[tarea,tareas])

  //creo function en forma de flecha
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("msj de prueba");
    let arreglo = tareas;
    arreglo.push(tarea);
    setTareas(arreglo);
    console.log(tareas);
    setTarea("");

  }; 
  const borrarTarea = (nombre) =>{
    let arregloModificado = tareas.filter((unaTarea)=> unaTarea !== nombre);
    setTareas(arregloModificado);
  }
  return (
    <Fragment>
    <div className="d-flex justify-content-center">
      <form action="w-75" onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input
            className="form-control"
            type="text"
            placeholder="Tarea1"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <button className="btn btn-outline-light" type="submit" >Agregar</button>
        </div>
      </form> 
    </div>
    <section className="container w-50">
      <Lista tareasEnviar={tareas} borrarTarea={borrarTarea}></Lista>
    </section>
    </Fragment>
  );
};

export default Fomulario;
