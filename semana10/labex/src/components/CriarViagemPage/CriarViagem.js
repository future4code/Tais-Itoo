import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fundoLogin from '../imagens/fundoInscAdmin.jpg';
import { useHistory } from "react-router";
import axios from 'axios'

const LoginContainer = styled.div` 
height: 120vh;
width:100vw;
background-image: url(${fundoLogin});
background-size: cover;
background-repeat: no-repeat;
display:flex;
justify-content: space-around;
align-items: center;
`
const FormContainer = styled.div` 
width: 80vw;
height: 68vh;
background-color: rgba(0, 0, 0, 0.75);
display: grid;
align-items: start;
column-gap: 15px;
color: white;
margin-top:37vh;`


const CriarViagem = () => {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            history.push("/admin");
        }
    }, [history]);

    const useForm = initialValues => {
        const [form, setForm] = useState(initialValues);

        const onChange = (name, value) => {
            const newForm = { ...form, [name]: value };
            setForm(newForm);
        };

        const resetForm = () => {
            setForm(initialValues);
        };

        return { form, onChange, resetForm };
    };


    const { form, onChange, resetForm } = useForm({
        Nome: "",
        Descrição: "",
        Planeta: "",
        Duração: "",
        Data: ""
    });

    const handleInputChange = event => {
        const { value, name } = event.target;

        onChange(name, value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        console.log(form);
    };

    return (
        <LoginContainer>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <input
                        value={form.nome}
                        onChange={handleInputChange}
                        name="nome"
                        type="text"
                        inputProps={{ pattern: '[A-Za-z ]{5,}'}}
                        placeholder="Nome"
                        required
                    />
                    <input
                        value={form.descrição}
                        onChange={handleInputChange}
                        name="descrição"
                        type="text"
                        placeholder="Descrição"
                        required
                    />
                   <select
          value={form.planet} 
          onChange={handleInputChange} 
          name="planet"
          type="text"           
          placeholder="Planeta"
          required          
          >
            <option>Planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urano</option>
            <option>Netuno</option>            
          </select>
                    <input
                        value={form.duração}
                        onChange={handleInputChange}
                        name="duração"
                        type="date"
                        placeholder="Duração em dias"
                        required
                    />
                    <input
                        value={form.data}
                        onChange={handleInputChange}
                        name="data"
                        type="date"
                        placeholder="Data"
                        required
                    />
                    <button>Enviar</button>
                    <button onClick={resetForm}>Limpar campos</button>
                </form>
            </FormContainer>
        </LoginContainer>
    );
};


export default CriarViagem;