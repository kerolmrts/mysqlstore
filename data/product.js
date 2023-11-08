const dbConnection = require('./conn');

const getProducts = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products';

        dbConnection.query(query, (err, results) => {
            if(err){
                reject(err);
            } else {
                resolve(results);
            }
        });

    })
}

const getProductById= (productId) =>{
    return new Promise((resolve, reject)=>{
        const query= 'SELECT * FROM products WHERE product_id=?'
        dbConnection.query(query, [productId], (err, result)=>{
            if(err){
                reject(err)
            }else{
               if(result.length > 0){
                resolve(result[0])
               }else{
                resolve(null)
               }
            }
        })
    })

}

module.exports = {
    getProducts,
    getProductById
}