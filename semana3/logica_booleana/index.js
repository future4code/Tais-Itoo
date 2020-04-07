//1. 

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 && bool3
// console.log("a. ", resultado) 
//a.false

// resultado = (bool2 || bool1) && !bool3
// console.log("b. ", resultado) 
//b.false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado) 
//c.true

// resultado = (resultado && (!bool1 || bool2)) && !bool3
// console.log("d. ", resultado) 
//d.false

// console.log("e. ", typeof resultado) 
//e.boolean

//________________________________________________________

//2.
// let array
// console.log('I. ', array)

// array = null
// console.log('II. ', array)


// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('III. ', array.length)

// let i = 0
// console.log('IV. ', array[i], " e ", array[i + 1])

// array[i + 1] = 19
// const valor = array[i + 6]
// console.log('V. ', array[i + 1], " e ", valor)

// i += 1
// array[i] = array[i - 1]
// console.log('VI. ', array[i])

// i = array.length - 1
// array[i] = array[i - 3]
// const resultadoC = array[i] % array[1]
// console.log('VII. ', resultadoC)

//a. Arrays são usadas para armazenar vários valores em uma única variável.
//b. É o 0.
//c. array.length
//d. I.  undefined
//   II.  null
//   III.  11
//   IV.  3  e  4
//   V.  19  e  9
//   VI.  3
//   VII.  1

//________________________________________________________

//1. Exercício de escrita de código

//a.
// let grausK = (77 - 32) * 5 / 9 + 273.15
// console.log(grausK + "K")

//b.
// let grausF = 80 * 9 / 5 + 32
// console.log(grausF + "F")

//c.
// grausF = 30 * 9 / 5 + 32
// grausK = (grausF - 32) * 5 / 9 + 273.15
// console.log("30C = " + grausF + "F=" + grausK + "K")

//d.
// let grausC = ("Digite o valor que você quer converter")
// grausF = grausC * 9 / 5 + 32
// grausK = (grausF - 32) * 5 / 9 + 273.15
// console.log(grausC + " C= " + grausF + "F=" + grausK + "K")

//________________________________________________________

//2.
// let nome = prompt("Qual o seu nome?")
// console.log("Resposta: " + nome)
// let idade = prompt("Qual a sua idade?")
// console.log("Resposta: " + idade)
// let endereco = prompt("Qual o seu endereço?")
// console.log("Resposta: " + endereco)
// let cor = prompt("Qual a sua cor favorita?")
// console.log("Resposta: " + cor)
// let email = prompt("Qual o seu email?")
// console.log("Resposta: " + email)

//________________________________________________________

//3.
// let consumo = prompt("Quantos kwh você consome?")
// consumo = consumo * 0.05;
// console.log("O consumo da residência é R$" + consumo.toFixed(2))

//a.
// let consumo2 = 280 * 0.05;
// console.log("O consumo da residência é R$" + consumo2.toFixed(2))

//b.
// let desconto = prompt("Qual a porcentagem do desconto?")
// consumo = consumo - (consumo * (desconto / 100))
// console.log("O consumo da residência com desconto de " + desconto + "% é R$" + consumo.toFixed(2))


//_______________________________________________________________


// //Desafio

//a.
// let lb_kg = 20 * 0.453592
// console.log("20 lb equivalem a " + lb_kg + "kg")

//b.
// let oz_kg = 10.5 * 0.0283495
// console.log("10.5 oz equivalem a " + oz_kg + "kg")

//c.
// let mi_m = 100 * 1609.34
// console.log("100 mi equivalem a " + mi_m + "m")

//d.
// let ft_m = 50 * 0.3048
// console.log("50 ft equivalem a " + ft_m + "m")

//e.
// let gal_l = 103.56 * 3.78541
// console.log("103.56 gal equivalem a " + gal_l + "l")