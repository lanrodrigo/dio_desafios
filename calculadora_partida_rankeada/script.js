//Criar funções 
function saldoDeVitorias(vitorias, derrotas){
    let diferenca = vitorias - derrotas
    return diferenca
}

function nivelHeroi(saldo){
    if(saldo <= 10){
        nivel = 'Ferro'
    } else if(saldo > 10 && saldo <=20){
        nivel = 'Bronze'
    } else if(saldo > 20 && saldo <=50){
        nivel = 'Prata'
    } else if(saldo > 50 && saldo <=80){
        nivel = 'Ouro'
    } else if(saldo > 80 && saldo <=90){
        nivel = 'Diamante'
    } else if(saldo > 90 && saldo <=100){
        nivel = 'Lendário'
    } else{
        nivel = 'Imortal'
    }
    return nivel
}

// Criação de variáveis
let vitorias = 101
let derrotas = 20
let saldo = saldoDeVitorias(vitorias, derrotas)
let nivelDoHeroi = nivelHeroi(saldo)

// Apreseentação do resultado
console.log(`O herói tem um saldo de ${saldo} e está no nível ${nivelDoHeroi}`)


