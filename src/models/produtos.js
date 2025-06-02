const e = require('express')
const pool = require('./database')

async function getProdutos() {
    const produtos = await pool.query('SELECT * FROM produtos')
   
    return produtos.rows
}

async function createProduto(produto){
    try {
        const insertProduto = await pool.query(
            `
            INSERT INTO produtos (nome, preco, categoria, image_url)
            VALUES ($1, $2, $3, $4)
            RETURNING *
            `, [ produto.nome,
                 produto.preco,
                 produto.categoria,
                 produto.image_url
                ])
        return insertProduto.rows[0]
        
    } catch (error) {
        console.error(error)
        throw new Error('Erro ao criar produto')

    }
}

module.exports = {
    getProdutos,
    createProduto
}