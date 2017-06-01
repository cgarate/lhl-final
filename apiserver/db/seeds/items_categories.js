exports.seed = function(knex, Promise) {
  return seedItemsCategoriesTable()

    function seedItemsCategoriesTable() {
      return knex('items_categories').del()
        .then(function() {
          return Promise.all([


          ]);
        });
    }
};
