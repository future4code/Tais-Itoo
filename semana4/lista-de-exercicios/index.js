//1. Esta função calcula a conversão de dólar para real. 
//Primeiro na const cotacao solicita que o usuário digite o valor da cotação do dólar do dia.
//No return a string R$ está concatenada ao cálculo de 100 dólares multiplicado pela cotação do dia.
//Na const meuDinheiro define que o valor que será calculado é de 100 dólares.
//O console.log imprime no console a resposta da função conversorDeMoeda.

// function conversorDeMoeda(valorEmDolar) {
//     const cotacao = Number(prompt("Informe o valor da cotação do dólar"));

//     return "R$" + (valorEmDolar * cotacao);
// }

// const meuDinheiro = conversorDeMoeda(100);

// console.log(meuDinheiro);

//2. A função investeDinheiro recebe 2 parâmetros que é o tipoDeInvestimento e o valor.
//Define uma variável valorAposInvestimento que vai receber o resultado do cálculo de cada investimento.
//Será solicitado qual o tipo de investimento o usuário quer calcular.
//Caso seja poupança, o valorAposInvestimento recebe o valor que o usuário definiu multiplicado pelo rendimento da poupança.
//Caso seja renda fixa, o valorAposInvestimento recebe o valor que o usuário definiu multiplicado pelo rendimento da renda fixa.
//Caso seja CDB, o valorAposInvestimento recebe o valor que o usuário definiu multiplicado pelo rendimento do CDB.
//Caso seja ações, o valorAposInvestimento recebe o valor que o usuário definiu multiplicado pelo rendimento de ações.
//Caso seja informado um investimento inválido, aparecerá o alerta "tipo de investimento informado incorreto!".
//Após definir um investimento, retorna o valor calculado.
//A const novoMontante recebe o resultado da função com as informações dos parâmentros que o usuário definiu, no caso tipo de investimento seria ações, e o valor definido é de 150.
//A const segundoMontate recebe o resultado da função com um segundo fator de capitalização que no caso utiliza o tesouro direto, com um valor definido de 200.
//No console será impresso os dois resultados.


// function investeDinheiro(tipoDeInvestimento, valor) {
//     let valorAposInvestimento;

//     switch (tipoDeInvestimento) {
//         case "Poupança":
//             valorAposInvestimento = valor * 1.03;
//             break;
//         case "Renda Fixa":
//             valorAposInvestimento = valor * 1.05;
//             break;
//         case "CDB":
//             valorAposInvestimento = valor * 1.06;
//             break;
//         case "Ações":
//             valorAposInvestimento = valor * 1.1;
//             break;
//         default:
//             alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO!")
//             break;

//     }
//     return valorAposInvestimento;
// }

// const novoMontante = investeDinheiro("Ações", 150);
// const segundoMontante = investeDinheiro("Tesouro Direto", 200);

// console.log(novoMontante);
// console.log(segundoMontante);

//3. O primeiro console.log imprime a quantidade de itens na array numeros através do length.
//O segundo console.log imprime a quantidade de números pares que através do if, faz o divisão
//de cada número da array por 2, e se o resultado for 0, é um número par.
//O terceiro console.log imprime através do else, a quantidade de números ímpares da array.

// const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283];
// const array1 = [];
// const array2 = [];

// for (let numero of numeros) {
//     if (numero % 2 === 0) {
//         array1.push(numero);
//     } else {
//         array2.push(numero);
//     }
// }

// console.log("Quantidade total de números", numeros.length)
// console.log(array1.length)
// console.log(array2.length)

//4. A let numero representa cada elemento da const numeros, 
//foi criada para facilitar na comparação de cada elemento com a let numeros1, que recebe a propriedade infinity. 
//Esta é um valor numérico infinito que pode representar o maior ou menor número.
// Então para cada elemento da const numeros, se um elemento for menor que o menor número, 
//então a let numero1 recebe o menor elemento da const numeros.
//Compara cada elemento da array pela let numero2 e atribui o maior valor a let numero2 que recebe o maior número da array.

// const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283, 1, 99, 13, 31, 83, 131, 1, 1.1, -10, 25, 1590];
// let numero1 = Infinity;
// let numero2 = 0;

// for (let numero of numeros) {
//     if (numero < numero1) {
//         numero1 = numero;
//     }
//     if (numero > numero2) {
//         numero2 = numero;
//     }
// }

// console.log(numero1);
// console.log(numero2);

//_____________________________________________________________


//EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

//1. a.false  b.true   c. false   d.true   e.true

//2.


// const quantidadeDeNumerosPares  = [8];

// for (let  i = 0;  i <= 4;  i++)  {        
//     if  (i  %  2  ===  0)  {
//         const quantidadeDeNumerosPares =  i ;    
//         console.log(i);
//     }
// }

//3.Deu mais ou menos certo.. 

// let ladoA = Number(prompt("Digite a medida A:"));
// let ladoB = Number(prompt("Digite a medida B:"));
// let ladoC = Number(prompt("Digite a medida C:"));

// if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
//     console.log("Equilátero")
// } else {
//     (ladoA !== ladoB && ladoB !== ladoC &&
//         ladoC !== ladoA)
//     console.log("Escaleno")
// }
// if (ladoA !== ladoB && ladoB === ladoC || ladoA === ladoB && ladoB !== ladoC || ladoC !== ladoA && ladoA === ladoB) {
//     console.log("Isósceles")
// }