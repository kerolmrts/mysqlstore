const dbConnection = require('./conn');


const createCategory = (category_name) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO categories (category_name) VALUES (?)";

        dbConnection.query(query, [category_name], (err, result) =>{
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    createCategory
}