import React from 'react'
import Header from './Header'

// É uma boa prática criar componentes stateful por meio da sintaxe 'class'.
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1>Component App!</h1>
      </>
    )
  }
}

export default App