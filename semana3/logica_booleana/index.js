const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) //a.false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //a.false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //a.true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //a.false

console.log("e. ", typeof resultado) //a.boolean


let grausK = (77 - 32) * 5 / 9 + 273.15
console.log(grausK + "K")

let grausF = 80 * 9 / 5 + 32
console.log(grausF + "F")

grausF = 30 * 9 / 5 + 32
grausK = (grausF - 32) * 5 / 9 + 273.15
console.log("30C = " + grausF + "F=" + grausK + "K")

let grausC = ("Digite o valor que você quer converter")
grausF = grausC * 9 / 5 + 32
grausK = (grausF - 32) * 5 / 9 + 273.15
console.log(grausC + " C= " + grausF + "F=" + grausK + "K")


console.log("Questão 2:")
let nome = prompt("Qual o seu nome?")
console.log("Resposta: " + nome)
let idade = prompt("Qual a sua idade?")
console.log("Resposta: " + idade)
let endereco = prompt("Qual o seu endereço?")
console.log("Resposta: " + endereco)
let cor = prompt("Qual a sua cor favorita?")
console.log("Resposta: " + cor)
let email = prompt("Qual o seu email?")
console.log("Resposta: " + email)


let consumo = prompt("Quantos kwh você consome?")
consumo = consumo * 0.05;
console.log("O consumo da desidência é R$" + consumo.toFixed(2))

let desconto = prompt("Qual a porcentagem do desconto?")
consumo = consumo - (consumo * (desconto / 100))
console.log("O consumo da residência com desconto de " + desconto + "% é R$" + consumo.toFixed(2))

let consumo2 = 280 * 0.05;

console.log("O consumo da residência é R$" + consumo.toFixed(2))