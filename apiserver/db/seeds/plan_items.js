exports.seed = function(knex, Promise) {
  return seedPlansItemsTable()

  function seedPlansItemsTable() {
    return knex('plans_items').del()
      .then(function() {
        return Promise.all([
          knex('plans_items').insert(
          {
            plan_id: 5,
            item_id: 1,
            description: 'Watching Baywatch Movie @ Scotiabank Theater'
          }),

        knex('plans_items').insert(
          {
            plan_id: 5,
            item_id: 2,
            description: 'Dinner at Charidise'
          }),

        knex('plans_items').insert(
          {
            plan_id: 6,
            item_id: 3,
            description: 'Grab a scoop of ice cream'
          }),

        knex('plans_items').insert(
          {
            plan_id: 6,
            item_id: 4,
            description: 'Walk on the beach @ Cherry'
          }),

        knex('plans_items').insert(
          {
            plan_id: 7,
            item_id: 5,
            description: 'Hot Dogs @ Francy Franks'
          }),

        knex('plans_items').insert(
          {
            plan_id: 7,
            item_id: 6,
            description: 'Catch the Blue Jays vs Texans game'
          }),

        knex('plans_items').insert(
          {
            plan_id: 8,
            item_id: 7,
            description: 'Pre game drinks @ The Local'
          }),

        knex('plans_items').insert(
          {
            plan_id: 8,
            item_id: 8,
            description: 'TFC vs Vancouver Whitecaps'
          }),

        knex('plans_items').insert(
          {
            plan_id: 9,
            item_id: 9,
            description: 'Walk to Canoe Landing'
          }),

        knex('plans_items').insert(
          {
            plan_id: 9,
            item_id: 10,
            description: 'Visit to Purina Puppy Museum'
          }),

        knex('plans_items').insert(
          {
            plan_id: 10,
            item_id: 11,
            description: 'Coffee'
          }),

        knex('plans_items').insert(
          {
            plan_id: 10,
            item_id: 12,
            description: 'Christie Pits Art Crawl'
          }),

        knex('plans_items').insert(
          {
            plan_id: 11,
            item_id: 13,
            description: 'Gluten Free Garage Exhibit'
          }),

        knex('plans_items').insert(
          {
            plan_id: 12,
            item_id: 14,
            description: 'Offical Pride Month launch'
          }),

        knex('plans_items').insert(
          {
            plan_id: 13,
            item_id: 15,
            description: 'Kampai Festival of Sake'
          }),

        knex('plans_items').insert(
          {
            plan_id: 14,
            item_id: 16,
            description: 'Pink Flamingo Backyard patio Party'
          }),

        knex('plans_items').insert(
          {
            plan_id: 15,
            item_id: 17,
            description: 'Beer Trivia Night Hosted @ Lansdown Brewery'
          }),

        knex('plans_items').insert(
          {
            plan_id: 16,
            item_id: 18,
            description: 'St. Lawrence Market BBQ in the park'
          }),

        knex('plans_items').insert(
          {
            plan_id: 17,
            item_id: 19,
            description: '2017 Mac and Cheese Festival'
          }),

        knex('plans_items').insert(
          {
            plan_id: 18,
            item_id: 20,
            description: 'Bob Dylan on Screen: Don’t Look Back'
          }),

        knex('plans_items').insert(
          {
            plan_id: 19,
            item_id: 21,
            description: 'Comedy Brawl '
          }),

        knex('plans_items').insert(
          {
            plan_id: 20,
            item_id: 22,
            description: 'Karaoke Night'
          }),

        knex('plans_items').insert(
          {
            plan_id: 21,
            item_id: 23,
            description: 'Prepare for the face melting'
          }),

        knex('plans_items').insert(
          {
            plan_id: 21,
            item_id: 24,
            description: 'ACDC Concert'
          }),

        knex('plans_items').insert(
          {
            plan_id: 21,
            item_id: 25,
            description: 'Keep the party going'
          }),

        knex('plans_items').insert(
          {
            plan_id: 22,
            item_id: 26,
            description: 'Breakfast @ cereal bar'
          }),

        knex('plans_items').insert(
          {
            plan_id: 22,
            item_id: 27,
            description: 'Drinks & Appys'
          }),

        knex('plans_items').insert(
          {
            plan_id: 22,
            item_id: 28,
            description: 'Lunch'
          }),

        knex('plans_items').insert(
          {
            plan_id: 22,
            item_id: 29,
            description: 'Drinks'
          }),

        knex('plans_items').insert(
          {
            plan_id: 22,
            item_id: 30,
            description: 'Dinner'
          }),

        knex('plans_items').insert(
          {
            plan_id: 22,
            item_id: 31,
            description: 'Dessert'
          }),
        ]);
      });
  }

};
