exports.seed = function(knex, Promise) {
  return seedCategoriesTable()

    function seedCategoriesTable() {
      return knex('categories').del()
        .then(function() {
          return Promise.all([

          ]);
        });
    }
};
