const arrayDePosts = [];

function criarPost() {
    let textoTitulo = document.getElementById("titulo").value
    let textoAutor = document.getElementById("autor").value
    let textoConteudo = document.getElementById("conteudo").value
    console.log("título:" + textoTitulo + "\nautor: " + textoAutor + "\nconteúdo: " + textoConteudo)

    const objetoPost = {
        titulo: textoTitulo,
        autor: textoAutor,
        conteudo: textoConteudo

    }
    arrayDePosts.push(objetoPost)
    console.log(arrayDePosts);

    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""

    imprimePosts(arrayDePosts)
}

function imprimePosts(array) {
    document.getElementById("espaco-posts").innerHTML = ""
    for (post of array) {
        document.getElementById("espaco-posts").innerHTML +=
            `<div>
            <h3>${post.titulo}</h3>
            <p>Autor: ${post.autor}</p>
            <p>${post.conteudo}</p>
            </div>`
    }
}