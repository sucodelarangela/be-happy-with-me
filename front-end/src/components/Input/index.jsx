import React from 'react';

// O componente Input retornará um input type=text e terá uma callback para o evento onChange, que obtem o valor da tag input e o guarda no estado de NovoUsuario
export default function Input(props) {
  const estilo = {
    borderColor: props.valorInvalido ? '#d50000' : '#cccccc',
    backgroundColor: props.valorInvalido ? '#ffcdd2' : '#ffffff'
  };

  // O método assign() copia todos os atributos de um ou mais objetos para outro objeto de destino. Aqui estamos copiando this.props para dentro de propriedades, apagando o atributo propriedades.valorInvalido e repassando o objeto integralmente à tag input
  let propriedades = Object.assign({}, props);
  delete propriedades.valorInvalido;

  return (
    <input
      //usando o spread operator, podemos passar todas as propriedades sem relacioná-las uma a uma
      type="text"
      style={estilo}
      {...propriedades}
      //id={props.id}
      //placeholder={props.placeholder}
      //maxLength={props.maxLength}
    />
  );
}
