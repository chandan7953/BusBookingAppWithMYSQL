const mysql = require("mysql2");
const createTables = require("../createTables.js");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"busbookingapp"
});

connection.connect((err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connection has created in DB");
})

module.exports = connection;