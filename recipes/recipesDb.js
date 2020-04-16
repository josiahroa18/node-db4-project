const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(recipeId){
    return db.select('i.ingredientName')
        .from('recipes as r')
        .join('recipeIngredients as ri', 'r.id', 'ri.recipeId')
        .join('ingredients as i', 'ri.ingredientId', 'i.id')
        .where('r.id', recipeId);
}

function getInstructions(recipeId){
    return db.select('instructions')
    .from('steps')
    .where({recipeId});
}