//Exercício 1
// Resposta: senha do usuário

// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//     console.log("Passou no teste.")
// } else {
//     console.log("Não passou no teste.")
// }

//Exercício 2

// a.Para verificar o preço das frutas.
// b.O preço da maçã é R$2,25.
// c.R$24,55
// d. O preço da fruta Pêra é R$ 5,50.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM d.
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//Exercício 3
// Está dando um erro. Não foi detectado, a mensagem não está definida
// O erro ocorre porque a variável só existe dentro de escopo e o console.log está fora.

// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if (numero1 > 0 && numero2 > 0) {
//     let mensagem
//     if (numero1 > numero2) {
//         mensagem = "Número 1 é maior que o 2!"
//     } else {
//         mensagem = "Número 1 é menor ou igual ao 2!"

//     }
// }

// console.log(mensagem)