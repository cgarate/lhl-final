exports.up = function(knex, Promise) {
return CreateUsersTable()
.then(CreatePlansTable)
.then(CreateEventsTable)
.then(CreateEventsUsersTable)
.then(CreateUsersPlansTable)
.then(CreateItemsTable)
.then(CreateApisTable)
.then(CreateApisItemTable)
.then(CreatePlansItemsTable)
.then(CreateCategoriesTable)
.then(CreateItemsCategoriesTable)
.then(CreateMessagesTable);


  function CreateUsersTable() {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('username');
      table.string('email');
      table.string('image');
      table.dateTime('dob');
      table.string('password');
      table.string('bio');
      table.datetime('created_at');
      table.datetime('updated_at');
      table.integer('archived');
    });
  }

  function CreateEventsTable() {
    return knex.schema.createTable('events', function (table) {
      table.increments('id').primary();
      table.datetime('date');
      table.integer("plan_id").notNullable().references("id").inTable("plans");
      table.string('name');
      table.datetime('created_at');
      table.datetime('updated_at');
    });
  }

  function CreateEventsUsersTable() {
    return knex.schema.createTable('events_users', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('event_id').unsigned().references('id').inTable('events');
    });
  }

  function CreatePlansTable() {
    return knex.schema.createTable('plans', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.integer('owner_id').notNullable().references("id").inTable("users");
      table.integer('avg_rating');
      table.integer('likes');
      table.string('tod');
      table.datetime('created_at');
      table.datetime('updated_at');
    });
  }


  function CreateUsersPlansTable() {
    return knex.schema.createTable('users_plans', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.integer('plan_id').unsigned().references('id').inTable('plans');
    });
  }

  function CreateItemsTable() {
    return knex.schema.createTable('items', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('latitude');
      table.string('longitude');
      table.string('phone');
      table.string('street_address');
      table.string('city');
      table.string('province');
      table.string('country');
      table.string('postal_code');
      table.string('hours');
      table.string('website');
      table.datetime('created_at');
      table.datetime('updated_at');
      table.string('place_id');
    });
  }

  function CreateApisTable() {
    return knex.schema.createTable('apis', function (table) {
      table.increments('id').primary();
      table.string('provider');
      table.datetime('created_at');
      table.datetime('updated_at');
    });
  }

  function CreateApisItemTable() {
    return knex.schema.createTable('apis_items', function (table) {
      table.increments('id').primary();
      table.integer('api_id').unsigned().references('id').inTable('apis');
      table.integer('item_id').unsigned().references('id').inTable('items');
    });
  }

  function CreatePlansItemsTable() {
    return knex.schema.createTable('plans_items', function (table) {
      table.increments('id').primary();
      // table.integer('plan_id')
      table.integer('plan_id').unsigned().references('id').inTable('plans');
      table.integer('item_id').unsigned().references('id').inTable('items');
      table.string('description');
    });
  }

  function CreateCategoriesTable() {
    return knex.schema.createTable('categories', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.datetime('created_at');
      table.datetime('updated_at');
    });
  }

  function CreateItemsCategoriesTable() {
    return knex.schema.createTable('items_categories', function (table) {
      table.increments('id').primary();
      table.integer('item_id').unsigned().references('id').inTable('items');
      table.integer('category_id').unsigned().references('id').inTable('categories');
    });
  }

  function CreateMessagesTable() {
    return knex.schema.createTable('messages', function (table) {
      table.increments('id').primary();
      table.integer('recipient');
      table.integer('sender');
      table.string('content');
    });
  }

};


exports.down = function(knex, Promise) {
  return dropApisItems()
  .then(dropApis)
  .then(dropUsersPlans)
  .then(dropItemsCategories)
  .then(dropPlansItems)
  .then(dropItems)
  .then(dropEventsUsers)
  .then(dropEvents)
  .then(dropMessages)
  .then(dropCategories)
  .then(dropPlans)
  .then(dropUsers);


  function dropUsers() {
    return knex.schema.dropTableIfExists('users')
  }

  function dropPlans() {
    return knex.schema.dropTableIfExists('plans')
  }

  function dropCategories() {
    return knex.schema.dropTableIfExists('categories')
  }

  function dropMessages() {
    return knex.schema.dropTableIfExists('messages')
  }

  function dropEvents() {
    return knex.schema.dropTableIfExists('events')
  }

  function dropEventsUsers() {
    return knex.schema.dropTableIfExists('events_users')
  }

  function dropItems() {
    return knex.schema.dropTableIfExists('items')
  }

  function dropPlansItems() {
    return knex.schema.dropTableIfExists('plans_items')
  }

  function dropItemsCategories() {
    return knex.schema.dropTableIfExists('items_categories')
  }

  function dropUsersPlans() {
    return knex.schema.dropTableIfExists('users_plans')
  }

  function dropApis() {
    return knex.schema.dropTableIfExists('apis')
  }

  function dropApisItems() {
    return knex.schema.dropTableIfExists('apis_items')
  }


};
