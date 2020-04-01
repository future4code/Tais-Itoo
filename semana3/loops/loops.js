//1. A resposta no console é 105. O laço foi executado uma única vez porque o console.log está fora do bloco do laço. 
//Para chegar a este valor o i que era 0 no início foi executado 14 vezes somando 1, e sum que no início era 0, foi-se adicionando o +i.
//i+1=i+sum=sum 
//0+1=1+0=1
//1+1=2+1=3
//2+1=3+3=6
//3+1=4+6=10
//4+1=5+10=15
//5+1=6+15=21
//6+1=7+21=28
//7+1=8+28=36
//8+1=9+36=45
//9+1=10+45=55
//10+1=11+55=66
//11+1=12+66=78
//12+1=13+78=91
//13+1=14+91=105

// let sum = 0
// for (let i = 0; i < 15; i++) {
//     sum += i
// }
// console.log(sum)


//2.a. O push anexa novos elementos na nova lista.

// b. Array(4)
//    0: 10
//    1: 15
//    2: 25
//    3: 30
//    length: 4

// c. Se fosse 3 seria
//    Array(6)
//    0: 12
//    1: 15
//    2: 18
//    3: 21
//    4: 27
//    5: 30
//    length: 6

// c. Se fosse 4 seria
//    Array(1)
//    0: 12
//    length: 1

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 5
// for (const item of lista) {
//     if (item % numero === 0) {
//         novaLista.push(item)
//     }
// }
// console.log(novaLista)

//3.
//a.

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = 0

// for (let num of arrayOriginal) {
//     if (num > maior) {
//         maior = num
//     }
// }
// console.log(maior)






//b.

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novaArray = []

// for (const item of arrayOriginal) {
//     const divisao
//     divisao = item / 10
//     novaArray.push(divisao)
// }
// console.log(novaArray)

// //c. 


// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novaArray = []

// for (const item of arrayOriginal) {
//     const divisao
//     divisao = item / 10
//     novaArray.push(divisao)
// }
// console.log(novaArray)