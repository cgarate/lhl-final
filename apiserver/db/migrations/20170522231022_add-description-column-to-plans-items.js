exports.up = function(knex, Promise) {
  return knex.schema.table('plans_items', function (table) {
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('plans_items', function(table){
    table.dropColumn('description');
  })
};
