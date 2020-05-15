import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
    state = {
        pokeList: [],
        pokeImage: "",
        pokeImageBack: "",
        pokeSpecies: "",
        pokeTypes: ""
    };

    componentDidMount = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
            .then(response => {
                this.setState({ pokeList: response.data.results })
            }).catch(err => {
                console.log(err);
            });
    };

    pegaPokemon = event => {
        const pokeName = event.target.value;
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                this.setState({ pokeImage: response.data.sprites.front_default });
                this.setState({ pokeImageBack: response.data.sprites.back_default });
                this.setState({ pokeSpecies: response.data.species.name });
                this.setState({ pokeTypes: response.data.weight });
            })
            .catch(err => {
                console.log(err);
            });
        ;
    }


    render() {
        const image = this.state.pokeImage ? (
            <img src={this.state.pokeImage} alt="pokemon" />
        ) : (
                <div />
            );

        const imagem = this.state.pokeImageBack ? (
            <img src={this.state.pokeImageBack} alt="pokemon Back" />
        ) : (
                <div />
            );

        const species = this.state.pokeSpecies ? (
            <h2><strong>Espécie: {this.state.pokeSpecies}</strong></h2>
        ) : (
                <div />
            );

        const types = this.state.pokeTypes ? (
            <h3><strong>Peso: {this.state.pokeTypes}</strong></h3>
        ) : (
                <div />
            );

        return (
            <div className="App">
                <select onChange={this.pegaPokemon}>
                    <option value={""}>Nenhum</option>
                    {this.state.pokeList.map(pokemon => {
                        return <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                    })}
                </select>
                <div>
                    {species}
                    {types}
                    {image}
                    {imagem}


                </div>

            </div>
        )
    };
}

export default App;