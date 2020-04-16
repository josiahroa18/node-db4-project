
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
    table.increments();
    table.text('recipeName').notNullable();
  })
  .createTable('ingredients', table => {
    table.increments();
    table.text('ingredientName').notNullable();
  })
  .createTable('recipeIngredients', table => {
    table.integer('recipeId')
        .notNullable()
        .references('recipes.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table.integer('ingredientId')
        .notNullable()
        .references('ingredients.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table.primary(['recipeId', 'ingredientId']);
  })
  .createTable('steps', table => {
    table.increments();
    table.integer('recipeId')
        .notNullable()
        .references('recipes.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    table.integer('stepNumber')
        .notNullable();
    table.text('instructions')
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('steps')
    .dropTableIfExists('recipeIngredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
