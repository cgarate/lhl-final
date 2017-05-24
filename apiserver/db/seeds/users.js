exports.seed = function(knex, Promise) {
  const faker = require('faker');
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert([{archived: 0, first_name: 'Carlos', last_name: 'Garate', password: 'qwerty', username: 'garateca', email: 'carlos.m.garate@gmail.com', dob: '11/08/1974' }]),
        knex('users').insert([{archived: 1, first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: faker.internet.password(), username: faker.internet.userName(), email: faker.internet.email(), dob: faker.date.past() }]),
        knex('users').insert([{archived: 0, first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: faker.internet.password(), username: faker.internet.userName(), email: faker.internet.email(), dob: faker.date.past() }]),
        knex('users').insert([{archived: 0, first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: faker.internet.password(), username: faker.internet.userName(), email: faker.internet.email(), dob: faker.date.past() }]),
        knex('users').insert([{archived: 0, first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: faker.internet.password(), username: faker.internet.userName(), email: faker.internet.email(), dob: faker.date.past() }]),
      ]);
    });
};
