
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1,
          ingredientName: 'PopCorn Bag'
        },
        {
          id: 2,
          ingredientName: 'Noodle Package'
        },
        {
          id: 3,
          ingredientName: 'Flavor Package'
        },
        {
          id: 4,
          ingredientName: 'Rice'
        }
      ]);
    });
};
