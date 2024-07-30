// const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");
// const initializeModels = require("./initModels.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "mysql", //Note that the dialect is still 'mysql' even when using mysql2. Sequelize will automatically use mysql2 if it's installed.
});

// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// testConnection();
module.exports = sequelize;

//MySQL Connection
// const connection = mysql.createConnection({
//     host:dbConfig.HOST,
//     user: dbConfig.USER,
//     password:dbConfig.PASSWORD,
//     database:dbConfig.DB
// });

// connection.connect(error => {
//     if(error) throw error;
//     console.log("Successfully connected to the database.");
// })

// module.exports = connection;
