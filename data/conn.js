const mysql = require('mysql')
require('dotenv').config()

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}
const dbConnection = mysql.createConnection(dbConfig);

dbConnection.connect((err) => {
    if (err) {
        console.error('Error ao conectar o banco de dados:' + err)
    } else {
        console.log('Sucesso! Conexão realizada.')
    }
})

module.exports = dbConnection;