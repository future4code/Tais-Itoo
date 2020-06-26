import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Contato = () => {
    const pathParams = useParams();
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    return (
        <div>
            <p>Contato</p>
            <p>Linguagem selecionada: {pathParams.linguagem}</p>
            <button onClick={goToHome}>Ir para Home</button>
        </div>
    );

};

export default Contato;