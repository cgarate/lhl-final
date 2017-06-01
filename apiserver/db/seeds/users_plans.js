exports.seed = function(knex, Promise) {
  return seedUsersPlansTable()

  function seedUsersPlansTable() {
    return knex('users_plans').del()
      .then(function() {
        return Promise.all([
          knex('users_plans').insert(
          {
            user_id: 7,
            plan_id: 5
          }),

        knex('users_plans').insert(
          {
            user_id: 8,
            plan_id: 6
          }),

        knex('users_plans').insert(
          {
            user_id: 9,
            plan_id: 7
          }),

        knex('users_plans').insert(
          {
            user_id: 10,
            plan_id: 8
          }),

        knex('users_plans').insert(
          {
            user_id: 11,
            plan_id: 9
          }),

        knex('users_plans').insert(
          {
            user_id: 12,
            plan_id: 10
          }),

        knex('users_plans').insert(
          {
            user_id: 1,
            plan_id: 11
          }),

        knex('users_plans').insert(
          {
            user_id: 14,
            plan_id: 12
          }),

        knex('users_plans').insert(
          {
            user_id: 14,
            plan_id: 13
          }),

        knex('users_plans').insert(
          {
            user_id: 2,
            plan_id: 14
          }),

        knex('users_plans').insert(
          {
            user_id: 11,
            plan_id: 15
          }),

        knex('users_plans').insert(
          {
            user_id: 10,
            plan_id: 16
          }),

        knex('users_plans').insert(
          {
            user_id: 9,
            plan_id: 17
          }),

        knex('users_plans').insert(
          {
            user_id: 13,
            plan_id: 18
          }),

        knex('users_plans').insert(
          {
            user_id: 12,
            plan_id: 19
          }),

        knex('users_plans').insert(
          {
            user_id: 15,
            plan_id: 20
          }),

        knex('users_plans').insert(
          {
            user_id: 8,
            plan_id: 21
          }),

        knex('users_plans').insert(
          {
            user_id: 14,
            plan_id: 22
          }),
        ]);
      });
  }
}
