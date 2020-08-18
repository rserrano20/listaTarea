import React from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import "bootstrap/dist/css/bootstrap.min.css"; //no hace falta en titulo y subtitulo
import Formulario from "./components/Fomulario";

function App() {
  let comision = "7D";
  return (
    <div>
      <Titulo></Titulo>
      <Subtitulo comision="7D"></Subtitulo>
      <Subtitulo
        comision={comision}
        frase="Fea la actitud"
        anio={2020}
      ></Subtitulo>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
