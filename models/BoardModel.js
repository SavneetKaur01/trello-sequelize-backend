// const sql = require("./db.js");

// const Board = function(board){
//     this.boardName=board.name;
// }

// Board.createBoard = (newBoard, result) => {  

//     sql.query("INSERT INTO boards SET ?", newBoard,(err,res)=>{
//         if(err){
//             console.log("error:", err);
//             result(err, null); // parameters are err, data, if err is there, data is null and vice versa
//             return;
//         }

//         console.log("created board:", {id:res.insertId, ...newBoard}); //The res object is the response from the SQL query execution. res.insertId is a property in the response object that contains the ID of the newly inserted row.
//         result(null, {boardId:res.insertId, ...newBoard})
//     });

// }

// Board.getAllBoards = (result)=>{
//     // console.log("Hi Savi");
//     sql.query(`SELECT * FROM boards`,(err,res)=>{

//         if(err){
//             console.log("error:", err);
//             result(err,null);
//             return;
//         }

//         console.log("boards", res)
//         result(null, res);
//     })
// }

// module.exports = Board;

const { DataTypes } = require("sequelize");
const sequelize = require("./db.js");

const Board = sequelize.define('boards',{

    boardName:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports = Board;

// Board.sync({force:true}).then(()=>{                   //To synchronize model with database
//     console.log("The boards table got created");
// })
// .catch((error)=>{
//     console.log(error);
// })


