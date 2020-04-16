
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeIngredients')
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {
          recipeId: 1,
          ingredientId: 1
        },
        {
          recipeId: 2,
          ingredientId: 2
        },
        {
          recipeId: 2,
          ingredientId: 3
        },
        {
          recipeId: 3,
          ingredientId: 4
        }
      ]);
    });
};
