exports.seed = function(knex, Promise) {
  return seedEventsTable()

  function seedEventsTable() {
    return knex('events').del()
      .then(function() {
        return Promise.all([
          knex('events').insert(
                [{
                  date: '03/06/2017',
                  plan_id: 1,
                  name: 'The Classic',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '03/06/2017',
                  plan_id: 2,
                  name: 'Fun in the Sun',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '04/06/2017',
                  plan_id: 3,
                  name: 'Take me out to the ball game',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '04/06/2017',
                  plan_id: 4,
                  name: 'Golden Goal',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '03/06/2017',
                  plan_id: 5,
                  name: 'Pet Lovers',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '01/06/2017',
                  plan_id: 6,
                  name: 'The Hipster',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '01/06/2017',
                  plan_id: 7,
                  name: 'Gluten? No Thanks',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '01/06/2017',
                  plan_id: 8,
                  name: 'Pride Kickoff',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '01/06/2017',
                  plan_id: 9,
                  name: 'Sake Sake!!',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '01/06/2017',
                  plan_id: 10,
                  name: 'Summer Blue Jean Night',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '01/06/2017',
                  plan_id: 11,
                  name: 'Um what is... beer?',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '01/06/2017',
                  plan_id: 12,
                  name: 'BBQ in the Park',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '02/06/2017',
                  plan_id: 13,
                  name: 'I love Mac&Cheese',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '02/06/2017',
                  plan_id: 14,
                  name: 'Bob Dylan Movie',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '04/06/2017',
                  plan_id: 15,
                  name: 'Enjoying a Laugh',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '06/06/2017',
                  plan_id: 16,
                  name: 'Singing in the shower',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '09/06/2017',
                  plan_id: 17,
                  name: 'The Rock Show',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }]),

              knex('events').insert(
                [{
                  date: '08/06/2017',
                  plan_id: 18,
                  name: 'Better be hungry',
                  created_at: knex.raw('now()'),
                  updated_at: knex.raw('now()')
                }])
              ]);
            });
          }
        };
