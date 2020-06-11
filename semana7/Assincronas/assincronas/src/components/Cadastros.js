import React from "react";
import styled from "styled-components";
import axios from "axios";

const CadastroContainer = styled.div`
padding: 5vw;
display:flex;
flex-direction:column;
align-items: center;
`;

class Cadastros extends React.Component {
    state = {
        nomeValue: "",
        emailValue: ""
    };
    
    onChangeNome = event => {
       this.setState({ nomeValue: event.target.value }); 
    };

    onChangeEmail = event => {
        this.setState({ emailValue: event.target.value });
    };

    onClickCriar = () => {
        const body = { 
        nome: this.state.nomeValue,
        email: this.state.emailValue
    };
 
    axios
    .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
            headers: {
                Authorization: "tais-itoo-julian"
            }
        }
    )
    .then(response => {
        window.alert("Usuario criado com sucesso!");
    })
    .catch(error => {
        window.alert("Erro ao criar usuário!");
    });

    this.setState({ nomeValue:"", emailValue:""});
};

   render() {
        return ( 
            <CadastroContainer>
                <p>Nome:
                <input value={this.state.nomeValue} onChange={this.onChangeNome}/></p>
                <p>E-mail:
                <input value={this.state.emailValue} onChange={this.onChangeEmail}/></p>
                <button onClick={this.onClickCriar}>Criar</button>
            </CadastroContainer>
        );
    }
}

export default Cadastros;