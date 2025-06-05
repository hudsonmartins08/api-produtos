const express = require('express')
const router = express.Router()
const UsersMiddlewares = require('../middlewares/users')
const UsersController = require('../controllers/users')

router.post('/users',
    UsersMiddlewares.validateCreateUser,
    UsersController.createUser
)

module.exports = router