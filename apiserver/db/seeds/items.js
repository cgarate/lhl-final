exports.seed = function(knex, Promise) {

  const faker = require('faker');
  return knex('items').del()
    .then(function () {
      return Promise.all([
        knex('items').insert(
          {
            name: faker.company.companyName(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            phone: faker.phone.phoneNumber(),
            street_address: faker.address.streetAddress(),
            city: faker.address.city(),
            postal_code: faker.address.zipCode(),
            province: faker.address.stateAbbr(),
            country: faker.address.country(),
            hours: "Monday-Friday / 9:00 to 23:00 hrs",
            website: faker.internet.url()
          }),

        knex('items').insert(
          {
            name: faker.company.companyName(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            phone: faker.phone.phoneNumber(),
            street_address: faker.address.streetAddress(),
            city: faker.address.city(),
            postal_code: faker.address.zipCode(),
            province: faker.address.stateAbbr(),
            country: faker.address.country(),
            hours: "Monday-Friday / 9:00 to 23:00 hrs",
            website: faker.internet.url()
          }),

        knex('items').insert(
          {
            name: faker.company.companyName(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            phone: faker.phone.phoneNumber(),
            street_address: faker.address.streetAddress(),
            city: faker.address.city(),
            postal_code: faker.address.zipCode(),
            province: faker.address.stateAbbr(),
            country: faker.address.country(),
            hours: "Monday-Friday / 9:00 to 23:00 hrs",
            website: faker.internet.url()
          })

      ]);
    });
};
