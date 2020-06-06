// comments
        document.write ("Hello World")

// variaveis, tipos de dados
    let myvar = "Mel"
    var myvar = "Mel"
    const myconst = "Mel"

        document.write (myconst = myvar)

// string
// "" 
// ''
// ``

// number
// const n1 = 1
// const n2 = 2
// document.write (n1 + n2)

// boolean - true ou false
    const bTrue = true
    const bFalse = false
       document.write (bFalse)

// objetos possuem propriedades e funcionalidade
    const pessoa = {
        altura: "1,80m",
        idade: 24,
        soleiro: true,
        corre(){
    document.write ("executar uma grande logica de correr")        
    } 
}

    pessoa.correr()

// Array - Vetores
    const colecaoDeBolinhas = ["blue", "vitu", 1, {name: "My name"}]
        document.write(colecaoDeBolinhas[3].name)


// funcoes - funcionalidades - atalhos - reuso de codigo

// registrar funcao
    function sayMyName (name) {
        document.write (name)
}

// executar
sayMyName ("Douglas")
sayMyName ("Isaac")
sayMyName ("Vitulindo")

// condicionais

const notalFinal = 7

if ( notaFinal < 5 ) {
    document.write ("Reprovado")
} else {
    document.write ("Aprovado")
}

// loo repeticoes

for (i = 0; i < 10; i++) {
    document.write ("<p> Hello </p>")
}

// ou document.write ("<p>$(i)</p>")

