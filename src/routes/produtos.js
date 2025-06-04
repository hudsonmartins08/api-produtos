const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtos')
const produtosMiddleware = require('../middlewares/produtos')

router.get('/produtos', produtoController.getProdutos)
router.post('/produtos', produtosMiddleware.validateCreateProduto, produtoController.createProduto)

router.delete('/produtos/:id',
    produtosMiddleware.validateDeleteProduto,
    produtoController.deleteProduto
)

module.exports = router;