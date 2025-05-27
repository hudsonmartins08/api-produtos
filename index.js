const express = require('express')
const app = express()
const port = 6579
const produtosDb = []
const userDb = []

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Olá adorável mundo novo!")
})

app.post("/produtos", (req, res) => {
    const {nome, preco, categoria} = req.body
    
    if (!nome || !preco || !categoria)
        return res.status(400).send("Todos os campos são obrigatórios!")

    const produto = {
        nome: nome,
        preco: preco,
        categoria: categoria
    }

    produtosDb.push(produto)

    res.status(201).send(produto)
})

app.get("/produtos", (req, res) => {
    res.send(produtosDb)
})

app.post("/usuarios", (req, res) => {
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha)
        return res.status(400).send("Todos os campos são obrigatórios!")

    userDb.push({ nome, email, senha })

    res.status(201).send("Usuário cadastrado com sucesso!")

})

    

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
