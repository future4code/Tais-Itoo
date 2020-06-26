import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import fundoHome from '../imagens/fundoHome.jpg';
import buttonHome from '../imagens/botaoHome.png';

const HomeContainer = styled.div`
background-image: url(${fundoHome});
background-size: cover;
`
const Footer = styled.div` 
padding-top: 50%;
` 
const ButtonHome = styled.img` 
margin-top:21%;
margin-left: 47vw;
display:grid;
position: absolute;
 
:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
}
`

const Home = () => {
    const history = useHistory();
    const [linguagemAtual, setLinguagemAtual] = useState("portugues");

    const goToSobre = () => {
        history.push(`/sobre/${linguagemAtual}`);
    };

    const goToDestinos = () => {
        history.push(`/destinos/${linguagemAtual}`);
    };

    const goToCriarUsuario = () => {
        history.push("/criarusuario");
    };

    const goToContato = () => {
        history.push("/contato");
    };

    const goToCriarViagem = () => {
        history.push("/criarviagem");
    };

    const goToAdmin = () => {
        history.push("/admin");
    };

    return (
        <HomeContainer>
            <p>Home</p>
            <select
                value={linguagemAtual}
                onChange={e => setLinguagemAtual(e.target.value)}
            >
                <option value="portugues">Português</option>
                <option value="ingles">Inglês</option>
                <option value="espanhol">espanhol</option>
            </select>
            <button onClick={goToSobre}>Ir para página de Sobre</button>
            <button onClick={goToContato}>Ir para página de contato</button>
            <button onClick={goToDestinos}>Ir para página de destinos</button>
            <button onClick={goToCriarUsuario}>Ir para página criar usuario</button>
            <button onClick={goToCriarViagem}>Ir para página de criar viagem</button>
            <button onClick={goToAdmin}>Ir para página do administrador</button>
            <ButtonHome src={buttonHome} onClick={goToAdmin}/>
            <Footer></Footer>
        </HomeContainer>
    );
};

export default Home;