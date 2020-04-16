
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          recipeName: 'PopCorn'
        },
        {
          id: 2,
          recipeName: 'Ramen Noodles'
        },
        {
          id: 3,
          recipeName: 'Rice'
        }
      ]);
    });
};
