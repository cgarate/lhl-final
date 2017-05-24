exports.up = function(knex, Promise) {
  return knex.schema.table('items', function (table) {
    table.renameColumn('location', 'latitude');
    table.renameColumn('address', 'street_address');
    table.string('city');
    table.string('province');
    table.string('country');
    table.string('postal_code');
    table.string('longitude');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('items', function(table){
    table.renameColumn('latitude', 'location');
    table.renameColumn('street_address', 'address');
    table.dropColumns('longitude', 'city', 'province', 'country', 'postal_code');
  })
};
