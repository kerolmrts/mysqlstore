const cors = require('cors')
const express = require('express')
const productRoutes = require('./routes/productRoutes')
const categoryRoutes= require('./routes/categoryRoutes')

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/products', productRoutes)
app.use('/categories', categoryRoutes)
app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port);
})