import React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';

const LoginContainer = styled.div` 
width: 350px;
height: 325px;
background-color: black;
`  
const BoxLogin = () => {
    const pathParams = useParams();
    const history = useHistory();

    const goToDestinos = () => {
        history.push("/destinos/:linguagem")
    }

return (
<LoginContainer>
<button onClick={GoToDestinos}>Entrar</button>
</LoginContainer>

);
};

export default BoxLogin;
