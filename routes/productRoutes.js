const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", (req, res) => {
  productController
    .getProducts()
    .then((productsData) => {
      res.json(productsData);
    })
    .catch((error) => {
      res.status(500).send("Erro ao obter produtos!" + error);
    });
});
router.get("/withCategories", (req, res) => {
  productController.getProductsWithCategories()
  .then((productsData) =>{
    res.json(productsData)
  })
  .catch((error) => {
  res.status(500).send("Erro ao obter produtos com categorias" + error)
  })
});

router.get("/:id", (req, res) => {
  productController
    .getProductById(req.params.id)
    .then((productsData) => {
      if (productsData) {
        res.status(200).send(productsData);
      } else {
        res.status(404).send("Produto não encontrado");
      }
    })
    .catch((error) => {
      res.status(500).send("Erro ao obter o produto" + error);
    });
});

module.exports = router;
