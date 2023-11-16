// Criando a classe de herói e suas funções
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ""
    }

    // Criar função de atacar
        
    atacar(){
        switch (this.tipo){
            case "mago":
                this.ataque = "magia"
                break
            case "guerreiro":
                this.ataque = "espada"
                break
            case "monge":
                this.ataque = "artes marciais"
                break
            case "ninja":
                this.ataque = "shuriken"
                break
            default:
                this.ataque = "geral"
        }
 
        console.log(`O tipo ${this.tipo} atacou usando o ataque ${this.ataque}`)
    }
}

let heroiPrincipal = new heroi("Harlan", 37, "ninja")

heroiPrincipal.atacar()