const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/upload")

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


router.get('/paginated', (req, res) =>{
  const page= req.query.page;
  const pageSize= parseInt(req.query.pageSize);

  productController.getProductPaginated(page, pageSize)
  .then((products) =>{
    res.json(products)
  })
  .catch((error)=>{
    res.status(500).send('Erro na paginação!' + error)
  })
  
})
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

router.post('/', upload.single('product_image'), (req, res) => {

  const product_image = req.file.filename;
  const {
      product_title, 
      product_price,
      product_description,
      product_rate,
      product_count,
      category_id
  } = req.body;
  
  productController.createProduct(
      product_title, 
      product_price,
      product_description,
      product_image,
      product_rate,
      product_count,
      category_id
  )
  .then((result)=>{
      res.status(201).json({message: 'Produto criado com sucesso! ',  product_id: result.insertId})
  })
  .catch((error) =>{
      res.status(500).send("Erro ao criar produto! Detalhes: " + error);
  })
})

module.exports = router;
