exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('username');
      table.string('email');
      table.string('image');
      table.dateTime('dob');
      table.string('password')
    }),

    knex.schema.createTable('events', function (table) {
      table.increments('id').primary();
      table.datetime('date')
      table.integer("plan_id").notNullable().references("id").inTable("plans");
    }),

    knex.schema.createTable('events_users', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('event_id').unsigned().references('id').inTable('events');
    }),

    knex.schema.createTable('plans', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.integer('owner_id');
      table.integer('avg_rating');
      table.integer('likes');
      table.string('tod');
    }),

    knex.schema.createTable('users_plans', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('plan_id').unsigned().references('id').inTable('plans');
    }),

    knex.schema.createTable('items', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('location');
      table.string('phone');
      table.string('address');
      table.string('hours');
      table.string('website');
    }),

    knex.schema.createTable('apis', function (table) {
      table.increments('id').primary();
      table.string('provider');
    }),

    knex.schema.createTable('apis_items', function (table) {
      table.increments('id').primary();
      table.integer('api_id').unsigned().references('id').inTable('apis');
      table.integer('item_id').unsigned().references('id').inTable('items');
    }),

    knex.schema.createTable('plans_items', function (table) {
      table.increments('id').primary();
      table.integer('plan_id').unsigned().references('id').inTable('plans');
      table.integer('item_id').unsigned().references('id').inTable('items');
    }),

    knex.schema.createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('name');
    }),

    knex.schema.createTable('items_categories', function (table) {
      table.increments('id').primary();
      table.integer('item_id').unsigned().references('id').inTable('items');
      table.integer('category_id').unsigned().references('id').inTable('categories');
    }),

    knex.schema.createTable('messages', function (table) {
      table.increments('id').primary();
      table.integer('recipient');
      table.integer('sender');
      table.string('content');
    })

  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('plans'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('messages'),
    knex.schema.dropTable('events'),
    knex.schema.dropTable('events_users'),
    knex.schema.dropTable('items'),
    knex.schema.dropTable('plans_items'),
    knex.schema.dropTable('items_categories'),
    knex.schema.dropTable('users_plans'),
    knex.schema.dropTable('apis'),
    knex.schema.dropTable('apis_items')
  ])
};
