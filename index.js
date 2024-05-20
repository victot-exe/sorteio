let nomes=[]
let sortudos=[]

function btnSortear(){
    if(nomes.length <= 1){
        alert("A lista precisa conter pelo menos dois nomes")
        return
    }
    let sortudo = nomes[Math.floor(Math.random() * nomes.length)]
    console.log(sortudo)
    document.getElementById("sorteado").innerHTML = sortudo
    adicionarNomesElementoHtml(sortudo)
}

function validarForm(nome, sobrenome){
    if(!nome || !sobrenome){
        return false
    }
    return true
}

function btnCadastrar(){
    let nome = $("#firstName").val()
    let sobrenome = $("#lastName").val()
    let validacao = validarForm(nome, sobrenome)

    if(!validacao){
        alert("Insira os dados para o cadastro")
        return
    }
    let pessoa = `${nome} ${sobrenome}`
    nomes.push(pessoa)
}

function adicionarNomesElementoHtml(sortudo){
    var elementoHtml = document.getElementById("lista-nomes")

    var newLi = `<li class="list-group-item">${sortudo}</li>`

    elementoHtml.insertAdjacentHTML("beforeend", newLi)
}