import React from 'react';

// O componente Input retornará um input type=text e terá uma callback para o evento onChange, que obtem o valor da tag input e o guarda no estado de NovoUsuario
export function Input(props) {
  return (
    <input
      type="text"
      id={props.id}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  );
}
