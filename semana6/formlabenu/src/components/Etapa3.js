import React from "react";

class Etapa3 extends React.Component {
    render() {
        return <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <p><input type="name"/></p>

            <p>6. Você fez algum curso complementar?</p>      

         <p><select>
        <option value="nenhum">Nenhum</option>
        <option value="cursotecnico">Curso técnico</option>
        <option value="cursodeingles">Curso de inglês</option>
        </select></p>  

        </div>
    }
}

    export default Etapa3;