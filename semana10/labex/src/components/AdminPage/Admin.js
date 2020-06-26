import React, { useState } from 'react';
import styled from 'styled-components';
import fundoInscAdmin from '../imagens/fundoInscAdmin.jpg';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const InscAdminContainer = styled.div` 
height: 120vh;
width:100vw;
background-image: url(${fundoInscAdmin});
background-size: cover;
background-repeat:no-repeat;
display:flex;
justify-content: space-around;
align-items:center;
`
const ItemContainer = styled.div` 
margin-top: 15vw;
width: 25vw;
height: 25vw;
background-color: rgba(0, 0, 0, 0.75);
border-radius: 0 30% 0 30%;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
color:white;
font-family: 'Lucida Sans Regular';
`
const BotaoInsc = styled.button` 
width:6vw;
height: 5vh;
border-radius: 30px;
background-color: #fe5f03;
border: none;
font-size: 15px;
font-weight:bold;

:hover {
    background-color: #a63e01;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
}
`
const BotoesContainer = styled.div` 
width: 15vw;
display:flex;
flex-direction: rows;
justify-content: space-around;
padding: 2vw;
`  

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tais-julian";

const Admin = props => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goToDestinos = () => {
        history.push("/destinos/:linguagem")
    }

    const handleLogin = async () => {
        const body = {
          email: email,
          password: password
        };
    
        try {
          const response = await axios.post(`${baseUrl}/login`, body);
    
          localStorage.setItem("token", response.data.token);
          history.push("/criarviagem");
        } catch (e) {
          alert("Login falhou");
        }
      };
    
      const handleLogout = () => {
        localStorage.clear();
      };

    return (
        <InscAdminContainer>
            <ItemContainer>
                <h2>Inscreva-se</h2>
                <h3>para a próxima viagem</h3>
                <BotaoInsc onClick={goToDestinos}>Entrar</BotaoInsc>
                <h3>e tenha acesso a todas
                <br /> as informações da viagem</h3>
            </ItemContainer>
            <ItemContainer>
            <h2>Sou administrador</h2> 
            <p>Login:
            <input
             value={email}
             placeholder="E-mail"
             onChange={e => setEmail(e.target.value)}
             type="email"
           /></p>
            <p>Senha:
            <input
             value={password}
             placeholder="Senha"
             onChange={e => setPassword(e.target.value)}
             type="password"
           /></p>
           <BotoesContainer>
            <BotaoInsc onClick={handleLogin}>Login</BotaoInsc>
            <BotaoInsc onClick={handleLogout}>Logout</BotaoInsc>
            </BotoesContainer>
            </ItemContainer>
        </InscAdminContainer>
    );

}; 

export default Admin;