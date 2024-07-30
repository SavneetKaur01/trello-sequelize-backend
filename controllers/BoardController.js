const Board = require("../models/BoardModel.js");

// Create and Save a new Board
// const create = (req, res, next) => {
//   try {
//     if (!req.body) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return; // Add return to stop further execution
//     }
  
//     // Create a Board
//     const board = new Board({
//       name:req.body.boardName
//     });
  
//     Board.createBoard(board, (err, data) => {
//       if (err){
//         throw new Error(err.message || "Some error occurred while creating the Board.");
//       }
//         // res.status(500).send({
//           // message: err.message || "Some error occurred while creating the Board."
//         // });
//       else res.send(data);
//     });
//   } catch (error) {
//     next(error);
//   }  
// };


const create = async (req, res, next) => {
  try {
    const board = await Board.create({boardName: req.body.boardName});
    res.send(board);
    // const board = new Board({
    //   name: req.body.boardName
    // });

    // Board.createBoard(board, (err, data) => {
    //   if (err) {
    //     throw new Error(err.message || "Some error occurred while creating the Board.");
    //   } else res.send(data);
    // });
  } catch (error) {
    next(error);
  }  
};

// Retrieve all Boards from the database .
const getAll = async (req, res, next) => {
  try {
    const boards = await Board.findAll();
    res.send(boards);
    // Board.getAllBoards((err, data) => {
    //   if (err)
    //     {
    //       throw new Error(err.message || "Some error occurred while retrieving boards.")
    //     }
    //     // res.status(500).send({
    //     //   message: err.message || "Some error occurred while retrieving boards."
    //     // });
    //   else res.send(data);
    // });
  } catch (error) {
    next(error)
  }
  
};


module.exports = {
  create,
  getAll
};
