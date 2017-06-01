exports.seed = function(knex, Promise) {
  return seedEventsUsersTable()

  function seedEventsUsersTable() {
    return knex('events_users').del()
      .then(function() {
        return Promise.all([
          knex('events_users').insert(
          {
            user_id: 7,
            event_id: 1
          }),
        knex('events_users').insert(
          {
            user_id: 8,
            event_id: 2
          }),
        knex('events_users').insert(
          {
            user_id: 9,
            event_id: 3
          }),
        knex('events_users').insert(
          {
            user_id: 10,
            event_id: 4
          }),
        knex('events_users').insert(
          {
            user_id: 11,
            event_id: 5
          }),
        knex('events_users').insert(
          {
            user_id: 12,
            event_id: 6
          }),
        knex('events_users').insert(
          {
            user_id: 1,
            event_id: 7
          }),
        knex('events_users').insert(
          {
            user_id: 14,
            event_id: 8
          }),
        knex('events_users').insert(
          {
            user_id: 14,
            event_id: 9
          }),
        knex('events_users').insert(
          {
            user_id: 2,
            event_id: 10
          }),
        knex('events_users').insert(
          {
            user_id: 11,
            event_id: 11
          }),
        knex('events_users').insert(
          {
            user_id: 10,
            event_id: 12
          }),
        knex('events_users').insert(
          {
            user_id: 9,
            event_id: 13
          }),
        knex('events_users').insert(
          {
            user_id: 13,
            event_id: 14
          }),
        knex('events_users').insert(
          {
            user_id: 12,
            event_id: 15
          }),
        knex('events_users').insert(
          {
            user_id: 15,
            event_id: 16
          }),
        knex('events_users').insert(
          {
            user_id: 8,
            event_id: 17
          }),
        knex('events_users').insert(
          {
            user_id: 14,
            event_id: 18
          }),
        ]);
      });
    }
};
