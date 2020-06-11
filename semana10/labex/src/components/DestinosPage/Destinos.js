import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import fundoInscAdmin from '../imagens/fundo4.jpg';
import axios from 'axios'

const FundoContainer = styled.div` 
width: 100vw;
background-image: url(${fundoInscAdmin});
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
`

const DestinosContainer = styled.div`
width: 80vw;
height: 150vh;
background-color: rgba(0, 0, 0, 0.75);
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-items:space-between;
align-items: start;
column-gap: 15px;
color: white;
margin-top: 40vh;
padding-top: 1vw;
`

const CardContainer = styled.div` 
height:70vh;
justify-content:space-between;
display: flex;
flex-direction: column;
padding: 10px;
`
const TituloCard = styled.h3` 
margin: 0;
padding:0;
font-size: 1em;
`  
const TextoCard = styled.p` 
margin: 0;
padding:0;
`    


const Destinos = () => {
    const [trips, setTrips] = useState([]);


    useEffect(() => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/tais-julian/trips")
            .then(response => {
                console.log(response.data.trips)
                setTrips(response.data.trips)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const viagemCard = trips.map((trips) => {
        return <CardContainer>
            <img src={'http://picsum.photos/200/200'} alt={'foto'} />

                <TituloCard>Nome: {trips.name}</TituloCard>
                <TextoCard>Descrição: {trips.description}</TextoCard>
                <TextoCard>Planeta: {trips.planet} </TextoCard>
                <TextoCard>Duração em dias: {trips.durationInDays} </TextoCard>
                <TextoCard>Data: {trips.date} </TextoCard>
                <button>Adicionar ao carrinho</button>

        </CardContainer>
    })

    return (
        <FundoContainer>
            <DestinosContainer>
                {viagemCard}
            </DestinosContainer>
        </FundoContainer>
    )
};

export default Destinos;