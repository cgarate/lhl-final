exports.up = function(knex, Promise) {
  return knex.schema.table('plans', function (table) {
    table.timestamps("true");
  })
  return knex.schema.table('items', function (table) {
    table.timestamps("true");
  })
  return knex.schema.table('users', function (table) {
    table.timestamps("true");
  })
  return knex.schema.table('categories', function(table){
    table.timestamps("true");
  })
  return knex.schema.table('events', function(table){
    table.timestamps("true");
  })
  return knex.schema.table('messages', function(table){
    table.timestamps("true");
  })
  return knex.schema.table('apis', function(table){
    table.timestamps("true");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('plans', function(table){
    table.dropTimestamps();
  })
  return knex.schema.table('items', function(table){
    table.dropTimestamps();
  })
  return knex.schema.table('users', function(table){
    table.dropTimestamps();
  })
  return knex.schema.table('events', function(table){
    table.dropTimestamps();
  })
  return knex.schema.table('categories', function(table){
    table.dropTimestamps();
  })
  return knex.schema.table('apis', function(table){
    table.dropTimestamps();
  })
  return knex.schema.table('messages', function(table){
    table.dropTimestamps();
  })
};
