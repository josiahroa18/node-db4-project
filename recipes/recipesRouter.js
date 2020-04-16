const express = require('express');
const router = express.Router();
const Recipes = require('./recipesDb');

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(201).json(recipes);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id/ingredients', (req, res) => {
    Recipes.getShoppingList(req.params.id)
    .then(ingredients => {
        res.status(201).json(ingredients);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(instructions => {
        res.status(201).json(instructions);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;