exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.boolean('archived');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.dropColumn('archived');
  })
};
