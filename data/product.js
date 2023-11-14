const dbConnection = require("./conn");


const getProducts = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM products";

    dbConnection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getProductsWithCategories = () => {
  return new Promise((resolve, reject) => {
    const query = `
        SELECT products.product_title, categories.category_name
        FROM products
        INNER JOIN categories
        ON products.category_id= categories.category_id;
                `;

    dbConnection.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else{
        resolve(result)
      }
    });
  });
};

const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM products WHERE product_id=?";
    dbConnection.query(query, [productId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        if (result.length > 0) {
          resolve(result[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};

const getProductPaginated= (startIndex, pageSize) =>{
  return new Promise((resolve, reject)=>{
    const query= 'SELECT * FROM products LIMIT ?, ?';
    const values= [startIndex, pageSize];

    dbConnection.query(query, values, (err, result) =>{
      if(err){
        reject(err)
      }else{
        resolve(result)
      }
    })
  })
}

const deleteProductByCategoryId= (category_id) =>{
  return new Promise((resolve, reject)=>{
    const query= 'DELETE FROM products WHERE category_id = ?'
    dbConnection.query(query,[category_id], (err, result)=>{
      if(err){
        reject(err)

      }else{
        resolve(result)

      }
    })

  })
}

const createProduct = (
  product_title, 
  product_price,
  product_description,
  product_image,
  product_rate,
  product_count,
  category_id
) => {
  return new Promise((resolve, reject) => {
      const query = `
      INSERT INTO products (
          product_title, 
          product_price,
          product_description,
          product_image,
          product_rate,
          product_count,
          category_id
      ) VALUES (?,?,?,?,?,?,?)`;
      values = [
          product_title, 
          product_price,
          product_description,
          product_image,
          product_rate,
          product_count,
          category_id
      ];

      dbConnection.query(query, values, (err, result) => {
          if(err){
              reject(err);
          } else {
              resolve(result)
          }
      })
  })
}


module.exports = {
  getProducts,
  getProductById,
  getProductsWithCategories,
  getProductPaginated,
  deleteProductByCategoryId,
  createProduct
};
