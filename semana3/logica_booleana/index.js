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
console.log(grausK + "K") //298.15K

let grausF = 80 * 9 / 5 + 32
console.log(grausF + "F") //176K