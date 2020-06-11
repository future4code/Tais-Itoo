import React from 'react'
import Usuarios from "./components/Usuarios";
import Cadastros from "./components/Cadastros";
import styled from "styled-components";

const AppContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
`;

class App extends React.Component {
  state = {
    paginaAtual: "FORMULARIO"
  };

  onClickChangePage = () => {
    const paginaFinal = this.state.paginaAtual === "FORMULARIO" ? "LISTA" : "FORMULARIO";


    this.setState({ paginaAtual: paginaFinal });
  };

render() {
    return (
      <div className="AppContainer">
      <button onClick={this.onClickChangePage}>
        {this.state.paginaAtual === "FORMULARIO"
        ? "Ir para lista"
        : "Voltar para formulario"}
      </button>
      {this.state.paginaAtual === "FORMULARIO"? (
      <Cadastros/>
      ) : (
      <Usuarios/>
      )}
      </div>
    );
  }
}


export default App;
