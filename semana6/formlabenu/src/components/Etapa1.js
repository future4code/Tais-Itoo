import React from "react";

class Etapa1 extends React.Component {
    render() {
        return <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <p>1. Qual o seu nome?</p>
            <p><input type="name"/></p>
            
            <p>2. Qual sua idade?</p>
            <p><input type="name"/></p>

            <p>3. Qual seu email?</p>
            <p><input type="name"/></p>

            <p>4. Qual a sua escolaridade?</p>      

        <p><select>
        <option>Ensino médio incompleto</option>
        <option>Ensino médio completo</option>
        <option>Ensino superior incompleto</option>
        <option>Ensino superior completo</option>
        </select></p>    

        </div>
    }
}

    export default Etapa1;