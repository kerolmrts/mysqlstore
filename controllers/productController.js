const productData = require('../data/product')

const getProducts = async () => {
    const products = productData.getProducts()
    if(products) {
        return products;
    } else {
        throw new Error("Erro ao obter os produtos")
    }

}

const getProductById= async (productId) =>{
    try{
        //conecta e seleciona os dados no banco
        const product= productData.getProductById(productId)
        return product;

    } catch (error){
        throw new Error("Erro ao obter o produto. Detalhes:" + error.message)

    }

}

const getProductPaginated= async (page= 1, pageSize= 20) =>{ // se não tiver valor, vai incluir o 1 e o 20
try{
    const startIndex= (page - 1) * pageSize;
    const products= productData.getProductPaginated(startIndex, pageSize)
    return products;
} catch(error){
    
}

}
const getProductsWithCategories = async() =>{
    try{
        const products= productData.getProductsWithCategories()
        return products;
    }catch(error){
        throw new Error ("Erro ao obter os produtos por categoria.Detalhe:" + error.message)

    }
}

module.exports = {
    getProducts,
    getProductById,
    getProductsWithCategories,
    getProductPaginated

}