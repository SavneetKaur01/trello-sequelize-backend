const sequelize= require('./db.js');
const Board = require("./BoardModel.js");
const List = require("./ListModel.js");
const Card = require("./CardModel.js");
const CheckList = require("./CheckListModel.js");
const CheckItem = require("./CheckItemModel.js");


function initializeAssociation(){ //Function to initialize associations
    Board.hasMany(List,{
        foreignKey:'boardId'
    });
    List.belongsTo(Board, {
        foreignKey: 'boardId'
    });

    List.hasMany(Card,{
        foreignKey:'listId',
        onDelete:'CASCADE'
    });
    Card.belongsTo(Card,{
        foreignKey:'listId'
    });

    Card.hasMany(CheckList,{
        foreignKey:'cardId',         //The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B). So I m defining foreign key which will be in target (checklist) table.
        onDelete: 'CASCADE'
    });

    CheckList.belongsTo(Card,{
        foreignKey:'cardId'        //The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A). Here source model is checklist table. So I am defining foreign key in checkList table.
    });

    CheckList.hasMany(CheckItem,{
        foreignKey:'checklistId',
        onDelete:'CASCADE'
    });
    CheckItem.belongsTo(CheckList,{
        foreignKey:'checklistId'     
    });
}

async function initializeModels(){  //Function to synchronize models with databases

    initializeAssociation();  //Create all the associations
    try {
        await sequelize.sync();
        console.log("Synchronized all the models with database. All the tables created");
    } catch (error) {
        console.log("Unable to synchronize models wth database")
    }    
}

module.exports = initializeModels;

