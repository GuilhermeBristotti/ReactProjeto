import React from "react";
import './App.css'

import ListaAlunos from "./repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import Card from "./components/basicos/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/fragmento";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React 2</h1>
      <div className="Cards">
        <Card titulo="Repetição">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="Componente com Filhos">
          <Familia></Familia>
        </Card>

        <Card titulo="Desafio Aleatório">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="Fragmento">
          <Fragmento></Fragmento>
        </Card>

        <Card titulo="Com Parâmetro">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
          ></ComParametro>
        </Card>

        <Card titulo="Primeiro">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
}
