const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/', (req, res) => {
    const category_name = req.body;
    categoryController.createCategory(category_name)
        .then((result) => {
            res.status(200).json({message: 'Categoria criada com sucesso! Id: ' + result.insertId})
        })
        .catch((error) => {
            res.status(500).send('Erro ao inserir categoria!' + error)
        })
})


module.exports = router;