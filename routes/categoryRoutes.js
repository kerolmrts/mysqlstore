const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/', (req, res) => {
    const {category_name} = req.body;
    categoryController.createCategory(category_name)
        .then((result) => {
            res.status(200).json({message: 'Categoria criada com sucesso! Id: ' + result.insertId})
        })
        .catch((error) => {
            res.status(500).send('Erro ao inserir categoria!' + error)
        })
})

router.delete('/:id', (req, res)=>{
    const category_id= req.params.id;
    categoryController.deleteCategory(category_id)
    .then((result) =>{
        res.status(200).send("Excluído com sucesso!")

    })
    .catch((error)=>{
        res.status(500).send("Erro ao excluir a categoria!" + error)
    })

})


module.exports = router;