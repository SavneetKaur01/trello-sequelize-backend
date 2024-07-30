const Card = require("../models/CardModel.js");

const getAllCards = async (req, res, next) => {
  // console.log("Hello Hello");
  try {
    const cards = await Card.findAll({
      where:{
        listId:req.params.listId
      }
    });
    res.send(cards);
    // Card.getAllCards(req.params.listId, (err, data) => {
    //   console.log(req.params.listId);
    //   if (err) {
    //     throw new Error(
    //       err.message || "Some error occured while retrieving cards"
    //     );
    //     // res.status(500).send ({
    //     //   message: err.message || "Some error occured while retrieving cards"
    //     // })
    //   } else res.send(data);
    // });
    // console.log(res);
  } catch (error) {
    next(error);
  }
};

// const createCard = (req, res, next) => {
//   try {
//     if (!req.body) {
//       res.status(400).send({
//         message: "Content can not be empty!",
//       });
//       return;
//     }

//     // Create a Card
//     const card = new Card({
//       name: req.body.cardName,
//       listId: req.params.listId,
//     });

//     console.log(req.params.listId);

//     Card.createCard(card, (err, data) => {
//       if (err) {
//         throw new Error(
//           err.message || "Some error occurred while creating the Card."
//         );
//         // res.status(500).send({
//         //   message: err.message || "Some error occurred while creating the Card."
//         // });
//       } else res.send(data);
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const createCard = async (req, res, next) => {
  try {
    const card = await Card.create({
      cardName:req.body.cardName,
      listId:req.params.listId
    })

    res.send(card);
    // const card = new Card({
    //   name: req.body.cardName,
    //   listId: req.params.listId,
    // });

    // Card.createCard(card, (err, data) => {
    //   if (err) {
    //     throw new Error(err.message || "Some error occurred while creating the Card.");
    //   } else res.send(data);
    // });
  } catch (error) {
    next(error);
  }
};

const deleteCard = async (req, res, next) => {
  try {
    const card = await Card.findOne({
      where:{
        id: req.params.cardId
      }
    })

    if(!card){
      return res.status(500).send({message:"Card not found"})
    }

    await card.destroy({
      where:{
        cardId: req.params.cardId
      }
    });
    res.send(card);
    // Card.deleteCard(req.params.cardId, (err, data) => {
    //   if (err) {
    //     throw new Error(
    //       err.message || "Some error occurred while deleting the Card."
    //     );
    //     // res.status(500).send({
    //     //     message: err.message || "Some error occurred while deleting the Card."
    //     // });
    //   } else res.send(data);
    // });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
};
