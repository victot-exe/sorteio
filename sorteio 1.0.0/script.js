let nomes = [
    'Jéssica Fernanda Migoto ', 
    'Maiara Aparecida da Silva ', 
    'josé elias da silva pires ', 
    'Rafael Ribeiro Pires ', 
    'Thailoane', 
    'Elielson batista Teófilo ', 
    'Glayce aparecida cella moura ', 
    'Kleber Andrade damasceno ', 
    'Edgar viana', 
    'Talita Suellen de Araújo Pires ', 
    'Pedro carlos de Morais ', 
    'CLAUDINEI', 
    'Fabio de castro ', 
    'Carolina Fernanda Maximiano de Lima ', 
    'Deives Freitas do Nascimento ', 
    'Marcelo Rufino ', 
    'Marcelo Rufino ', 
    'Ariane', 
    'Vivian Tahira ', 
    'Tatiane ', 
    'Mayara Moura ', 
    'Natalia Iengo Silva ', 
    'Kelly Cristina Carneiro Aldana', 
    'ISABELLY CUNHA DE OLIVEIRA', 
    'Glauber Wellington Alves Barbosa ', 
    'Rodrigo Federice', 
    'Maurício Benani ', 
    'Leonardo', 
    'Ana Paula ', 
    'Paloma ', 
    'Emily ', 
    'Daniel Sagula', 
]
let nome = ''
// let sorteados = []

function sortear(){
    nome = nomes[Math.floor(Math.random() * nomes.length)]
    console.log(nome)
    document.getElementById("myName").innerHTML = nome

    // sorteados.push(nome)

    // document.getElementById("sorteados").innerHTML = sorteados

}

document.getElementById("myName").innerHTML = nome