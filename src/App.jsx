import React from "react";

import Primeiro from "./componentes/basicos/primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/fragmento";

export default function App(props) {
    return(
        <div id="app">
            <h1>Fundamentos React 2</h1>
            <Fragmento></Fragmento>
            <ComParametro 
                titulo="Situação do Aluno"
                 aluno="Pedro Silva"
                nota={9.3}>
            </ComParametro>
            <Primeiro></Primeiro>
        </div>
    )
}