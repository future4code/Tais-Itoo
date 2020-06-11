import React from 'react';
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/HomePage/Home";
import Sobre from "./components/SobrePage/Sobre";
import Contato from "./components/ContatoPage/Contato";
import Destinos from "./components/DestinosPage/Destinos";
import CriarUsuario from "./components/CadastrarUsuarioPage/CadastrarUsuario";
import CriarViagem from "./components/CriarViagemPage/CriarViagem";
import Admin from './components/AdminPage/Admin';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/contato">
          <Contato />
        </Route>
        <Route exact path="/sobre/:linguagem">
          <Sobre />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/destinos/:linguagem">
          <Destinos />
        </Route>
        <Route exact path="/criarusuario">
          <CriarUsuario />
        </Route>
        <Route exact path="/criarviagem">
          <CriarViagem />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route path="/admin">404!!!</Route>
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;