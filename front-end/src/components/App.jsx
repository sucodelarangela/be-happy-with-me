import React from 'react';
import Header from './Header';
import NovoUsuario from './NovoUsuario';

// É uma boa prática criar componentes stateful por meio da sintaxe 'class'.
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NovoUsuario />
      </div>
    );
  }
}

export default App;
