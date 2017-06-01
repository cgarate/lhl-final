exports.seed = function(knex, Promise) {
  return seedPlansTable()

  function seedPlansTable() {
    return knex('plans').del()
      .then(function() {
        return Promise.all([
          knex('plans').insert(
         {
         name: 'The Classic',
         description: 'Dinner & Movie',
         owner_id: 7,
         avg_rating: 3,
         likes: 50,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Fun in the Sun',
         description: 'Ice Cream & Hangout @ Cherry Beach',
         owner_id: 8,
         avg_rating: 3,
         likes: 40,
         tod: 'Afternoon',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Take me out to the ball game',
         description: 'Hot Dog @ Fancy - Blue Jays game',
         owner_id: 9,
         avg_rating: 4,
         likes: 65,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Golden Goal',
         description: 'Pre game drinks @ The Local - TFC game',
         owner_id: 10,
         avg_rating: 5,
         likes: 100,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Pet Lovers',
         description: 'Walk to Canoe Landing - Visit Puppy Museum',
         owner_id: 11,
         avg_rating: 3,
         likes: 30,
         tod: 'Afternoon',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'The Hipster',
         description: 'Coffee - Christie Pits Art Crawl',
         owner_id: 12,
         avg_rating: 3,
         likes: 45,
         tod: 'Afternoon',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Gluten? No Thanks',
         description: 'Drinks @ Gluten Free Garage Exhibit',
         owner_id: 1,
         avg_rating: 2,
         likes: 25,
         tod: 'Afternoon',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Pride Kickoff',
         description: 'Pride Month Launch',
         owner_id: 14,
         avg_rating: 4,
         likes: 30,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Sake!!',
         description: 'Lets drink some sake!',
         owner_id: 14,
         avg_rating: 4,
         likes: 33,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Summer Nights',
         description: 'Backyard Patio Party',
         owner_id: 2,
         avg_rating: 4,
         likes: 28,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'What is... Beer',
         description: 'Beer Trivia Night',
         owner_id: 11,
         avg_rating: 5,
         likes: 50,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'BBQ',
         description: 'BBQ in the Park',
         owner_id: 10,
         avg_rating: 3,
         likes: 32,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'I love Mac&Cheese',
         description: 'Mac&Cheese',
         owner_id: 9,
         avg_rating: 4,
         likes: 20,
         tod: 'Afternoon',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Watching Bob Dylan',
         description: 'Bob Dylan on Screen',
         owner_id: 13,
         avg_rating: 4,
         likes: 34,
         tod: 'Afternoon',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Let\'s Laugh',
         description: 'Comedy Brawl',
         owner_id: 12,
         avg_rating: 5,
         likes: 49,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Singing in the shower',
         description: 'Karaoke Night',
         owner_id: 15,
         avg_rating: 4,
         likes: 9,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'The Rock Show',
         description: 'I love Rock n Roll',
         owner_id: 8,
         avg_rating: 4,
         likes: 9,
         tod: 'Night',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),
     knex('plans').insert(
       {
         name: 'Foodie',
         description: 'Lil bit of everything',
         owner_id: 14,
         avg_rating: 4,
         likes: 9,
         tod: 'Afternoon',
         created_at: knex.raw('now()'),
         updated_at: knex.raw('now()')
       }),

        ]);
      });
    }
  };
