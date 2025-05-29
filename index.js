const express = require('express')
const app = express()
const port = 6579
const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres.iynpoygccsxgidlqedyd',
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    database: 'postgres',
    password: '!hudboy007.',
    port: 5432
})

app.use(express.json())

app.post('/produtos', async (req, res) => {
    const {nome, preco, categoria, image_url} = req.body

    if (!nome || !preco || !categoria || !image_url) {
        return res.status(400).send('Todos os campos são obrigatórios')
    }

    if(nome.length > 100){
        return res.status(400).send('O nome do produto deve ter no máximo 100 caracteres')
    }
    if(categoria.length > 50){
        return res.status(400).send('A categoria do produto deve ter no máximo 50 caracteres')
    }


   try {
     const produto = await pool.query(`
        insert into produtos (nome, preco, categoria, image_url)
        values (
            '${nome}',
            ${preco},
            '${categoria}',
            '${image_url}'
        )
        returning *
    `)
    
    res.status(201).send(produto.rows)
    
   } catch (error) {
    console.error(error)
    res.status(500).send('Erro ao inserir produto')
    
   }
})

app.get('/produtos', async (req, res) => {
   try {
       const produtos = await pool.query('select * from produtos')
       return res.status(200).send(produtos.rows)
   } catch (error) {
       console.error(error)
       return res.status(500).send('Erro ao buscar produtos')
   }
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
