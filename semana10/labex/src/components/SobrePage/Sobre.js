import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Sobre = () => {
    const pathParams = useParams();
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    return (
         <div>
        <p> Sobre </p> 
        <p> Linguagem selecionada: { pathParams.linguagem } </p> 
        <button onClick = { goToHome } > Ir para Home </button> 
        </div>
    );
};

export default Sobre;