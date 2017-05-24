
exports.up = function(knex, Promise) {
  return knex.schema.table('plans', function (table) {
    table.foreign("owner_id").references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('plans', function(table){
    table.dropForeign('owner_id')
  })
};
