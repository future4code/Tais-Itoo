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
//O nome da função pode ser somarEEmultiplicarArray

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

//___________________________________________________________________

//4. Escreva as funções explicadas abaixo
//a. A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro

// function CalcularIdadeCachorro(anosHumanos){
//     const resultado = anosHumanos*7
//     return resultado
// }

//b. Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), o endereço (string) e um boolean que representa se é estudante ou não. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// function apresentarPessoa(nome, idade, endereco, isEstudante) {
//     let textoEstudante;
//     if (isEstudante === false) {
//         textoEstudante = "não sou";
//     } else {
//         textoEstudante = "sou";
//     }
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${textoEstudante} estudante`
// }

//__________________________________________________________________
// 5.O propósito desse exercício é que você determine a qual século um ano pertence. Para isso, considere as seguintes afirmações:

// 1. A sua função só precisa funcionar entre os anos 1000dc até 2020dc (se você quiser, pode implementar para um intervalo maior)
// 2. Ela deve retornar uma `string` com a mensagem: `O ano [ANO] pertence ao século [SÉCULO EM ALGARISMOS ROMANOS]`
//     - Algarismos Romanos
// 3. As regras de século normalmente confundem, então leiam os exemplos para entender melhor

// function converteParaSeculo(ano) {
//     if ((ano >= 1000) && (ano < 1101)) {
//         return "O ano " + ano + " pertence ao século XI"
//     } else
//     if ((ano >= 1100) && (ano < 1201)) {
//         return "O ano " + ano + " pertence ao século XII"
//     } else
//     if ((ano >= 1200) && (ano < 1301)) {
//         return "O ano " + ano + " pertence ao século XIII"
//     } else
//     if ((ano >= 1300) && (ano < 1401)) {
//         return "O ano " + ano + " pertence ao século XIV"
//     } else
//     if ((ano >= 1400) && (ano < 1501)) {
//         return "O ano " + ano + " pertence ao século XV"
//     } else
//     if ((ano >= 1500) && (ano < 1601)) {
//         return "O ano " + ano + " pertence ao século XVI"
//     } else
//     if ((ano >= 1600) && (ano < 1701)) {
//         return "O ano " + ano + " pertence ao século XVII"
//     } else
//     if ((ano >= 1700) && (ano < 1801)) {
//         return "O ano " + ano + " pertence ao século XVIII"
//     } else
//     if ((ano >= 1800) && (ano < 1901)) {
//         return "O ano " + ano + " pertence ao século XIX"
//     } else
//     if ((ano >= 1900) && (ano < 2001)) {
//         return "O ano " + ano + " pertence ao século XX"
//     } else
//     if ((ano >= 2000) && (ano < 2101)) {
//         return "O ano " + ano + " pertence ao século XXI"
//     }
// }
//____________________________________________________________________
//6.Para os itens a seguir, considere o seguinte array para os seus testes:
// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

//a.
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function contaItensArray(array) {
//     return array.length
// }

//b.
// function checaParOuImpar(numero) {
//     return numero % 2 === 0
// }

//c.
// function contaNumeroPares(array) {
//     let contador = 0;
//     for (numero of array) {
//         if (numero % 2 === 0) {
//             contador++;
//         }
//     }
// }

//d.
// function contaNumeroPares(array) {
//     let contador = 0;
//     for (let i = 0; i < array.length; i++) {
//         let numero = array[i];
//         if (checaParOuImpar(numero) === true) {
//             contador++
//         }
//     }
//     return contador;
// }