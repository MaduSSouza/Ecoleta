const express = require("express")
const server = express()

// DIA 5
// pegar o banco de dados
const db = require("./database/db.js")


// DIA 4
// configurar pasta publica
server.use(express.static("public"))

// DIA 5
// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

// DIA 5

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
})



server.get("/views/create-point.html", (req, res) => {
    // req.query: Query Strings da nossa url
    // console.log (req.query)

    return res.render("create-point.html")
})

// DIA 5
server.post("/savepoint", (req, res) => {
    // req.body: O corpo do nosso formulário
    // console.log (req.body)

    // inserir dados no banco de dados
    // 2) inserir os dados da tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})

server.get("/search-results.html", (req, res) => {
    const search = req.query.search

    if (search == "") {
        // pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        // console.log("Aqui estão seus registros: ")
        // console.log(rows)

        const total = rows.length  // conta a quantidade de pontos encontrados no search-results

        // mostrar a página do html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })
})

server.listen(3000)

// DIA 4 