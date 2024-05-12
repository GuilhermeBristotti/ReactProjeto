import React from "react";
import "./Card.css";

export default function Card(props) {
  
  return (
    <div className="Card">
      <div className="Title">Exemplo de Card</div>
      <div className="Content">
        {props.titulo}
        {props.children}
      </div>
    </div>
  );
}
