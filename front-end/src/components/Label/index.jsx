import React from 'react';

// props => propriedades do componente
export default function Label(props) {
  const estilo = {
    color: props.valorInvalido ? '#d50000' : '#444444'
  };

  return (
    <label style={estilo} htmlFor={props.for}>
      {props.texto}
    </label>
  );
}
