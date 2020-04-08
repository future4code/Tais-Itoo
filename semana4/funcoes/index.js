//1.a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
// Resposta: []
// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
// Resposta: (6) [0, 1, 0, 1, 2, 3]
// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
// Resposta: (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

// const minhaFuncao = (quantidade) => {   // =>  function
//     const array = []
//     for (let i = 0; i < quantidade; i += 2) {  //i+=2   i=i+2
//         for (let j = 0; j < i; j++) {
//             array.push(j)
//         }
//     }
//     return array
// }

//________________________________________________________________________________________________________

//2.a. Explicite quais são as saídas impressas no console.
// console.log(funcao(arrayDeNomes, "Darvas")); Resposta:0 (Porque o primeiro elemento da array está no índice 0 e Darvas é o primeiro elemento)
// console.log(funcao(arrayDeNomes, "João"));   Resposta:2 (Porque o terceiro elemento da array está no índice 2 e João é o terceiro elemento)
// console.log(funcao(arrayDeNomes, "Paula"));  Resposta: undefined (Porque não existe o elemento Paula na array)
// b. O código funcionaria se a lista fosse um array de números (ao invés de um array de string)  
// e o nome fosse um número, ao se chamar a função? Justifique sua resposta.
// Sim, porque se existir o mesmo item no array que está sendo solicitado, será localizado, indenpendente do tipo do elemento.

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//     for (let i = 0; i < lista.length; i++) {
//         if (lista[i] === nome) {
//             return i;
//         }
//     }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));


//________________________________________________________________________________________________________

//3.O código abaixo mostra uma função que recebe um array e devolve outro array. 
//Explique rapidamente o que ela faz e sugira um nome melhor para ela!
//Para obter o resultadoA, somar o let resultadoA que no caso é 0 pelo primeiro elemento da array, no próximo resultado, somar o resultado da primeira soma com o segundo elemento da array, até obter todos os resultados.
//Para obter o resultadoB, multiplicar o let resultadoB que é 1 pelo primeiro elemento da array, no próximo resultado, multiplicar oresultado da primeira multiplicação com o segundo elemento da array, até obter todos os resultados.
//Ao resultado da soma ficará no índice 0 e do produto ficará no índice 1.


// function metodo(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];

//     for (let x of array) {
//         resultadoA += x;
//         resultadoB *= x;
//     }

//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
// }

function minhaFuncao(quantidade) {
    const container = document.getElementById("main-container")
    for (let i = 1; i <= quantidade; i++) {
        if (i % 2 === 0) {
            container.innerHTML += "<div>" + i + "</div>"
        } else {
            container.innerHTML += "<span>" + i + "</span>"
        }
    }
}
minhaFuncao(5)