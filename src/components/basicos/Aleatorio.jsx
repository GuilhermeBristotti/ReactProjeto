import React from "react";

export default function Aleatorio(props) {
  const { min, max } = props;
  const aleatorio =
    parseInt(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo:</strong> {props.min} <br />
      </p>
      <p>
        <strong>Valor Máximo:</strong> {props.max} <br />
      </p>
      <p>
        <strong>Valor Escolhido</strong> {aleatorio} <br />
      </p>
    </div>
  );
}
