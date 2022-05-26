import React from 'react';

// props => propriedades do componente
export default function Label(props) {
  return <label htmlFor={props.for}>{props.texto}</label>;
}
