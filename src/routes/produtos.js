const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtos')
const produtosMiddleware = require('../middlewares/produtos')
const authMiddleware = require('../middlewares/auth')

router.get('/produtos',authMiddleware.validateToken, produtoController.getProdutos)
router.post('/produtos', produtosMiddleware.validateCreateProduto, produtoController.createProduto)

router.delete('/produtos/:id',
    produtosMiddleware.validateDeleteProduto,
    produtoController.deleteProduto
)

module.exports = router;