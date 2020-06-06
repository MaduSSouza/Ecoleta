const express = require ("express")
const server = express ()

// configurar pasta pública
server.use (express.static ("public"))

// configurar caminhos da minha aplicação
// página inicial
// req: Requisição (pedido)
// res: Resposta
server.get ("/", (req, res) => {
    res.sendFile (__dirname + "/views/index.html")
})


// ligar o servidor
server.listen (3000)