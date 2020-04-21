function criarDespesa() {
    let valorDaDespesa = document.getElementById("input-valor").value
    let tipoDeDespesa = document.getElementById("select-despesa").value
    let descricaoDaDespesa = document.getElementById("descricao").value
    document.getElementById("espaco-teste").innerHTML += `<p>${valorDaDespesa}</p>`
    document.getElementById("input-valor").value = ""
    document.getElementById("espaco-teste").innerHTML += `<p>${descricaoDaDespesa}</p>`
    document.getElementById("descricao").value = ""
}