const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtos')

router.get('/produtos', produtoController.getProdutos)
router.post('/produtos', produtoController.createProduto)

module.exports = router;