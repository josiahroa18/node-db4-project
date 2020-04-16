
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          id: 1,
          recipeId: 1,
          stepNumber: 1,
          instructions: 'Place popcorn bag in microwave for 3 minutes'
        },
        {
          id: 2,
          recipeId: 2,
          stepNumber: 1,
          instructions: 'Place noodles in boiling water'
        },
        {
          id: 3,
          recipeId: 2,
          stepNumber: 2,
          instructions: 'Sprinkle flavor package onto noodles in the boiling water'
        },
        {
          id: 4,
          recipeId: 3,
          stepNumber: 1,
          instructions: 'Cook rice in rice cooker'
        }
      ]);
    });
};
