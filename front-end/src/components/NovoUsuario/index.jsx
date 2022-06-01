import React from 'react';
import Input from '../Input';
import Label from '../Label';

class NovoUsuario extends React.Component {
  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label htmlFor="nome" texto="Quem é você?" />
        </form>
      </div>
    );
  }
}

export default NovoUsuario;
