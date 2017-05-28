
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('items', function (table) {
      table.timestamps("true");
    }),

    knex.schema.table('users', function (table) {
      table.timestamps("true");
    }),

    knex.schema.table('categories', function (table) {
      table.timestamps("true");
    }),

    knex.schema.table('events', function (table) {
      table.timestamps("true");
    }),

    knex.schema.table('messages', function (table) {
      table.timestamps("true");
    }),

    knex.schema.table('apis', function (table) {
      table.timestamps("true");
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.table('items', function (table) {
      table.dropTimestamps();
    }),

    knex.schema.table('users', function (table) {
      table.dropTimestamps();
    }),

    knex.schema.table('categories', function (table) {
      table.dropTimestamps();
    }),

    knex.schema.table('events', function (table) {
      table.dropTimestamps();
    }),

    knex.schema.table('messages', function (table) {
      table.dropTimestamps();
    }),

    knex.schema.table('apis', function (table) {
      table.dropTimestamps();
    })
  ])
};
