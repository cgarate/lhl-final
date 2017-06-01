exports.seed = function(knex, Promise) {
  return seedUsersTable()

  function seedUsersTable() {
    return knex('users').del()
      .then(function() {
        return Promise.all([
          knex('users').insert([{archived: 0, first_name: 'William', last_name: 'Clinton', password: 'password', username: 'mr.president', email: 'big_bill@hotmail.com', dob: '1646-08-19', image: './images/bill-clinton.jpg', bio: 'I am a rocket scientist. I’ve appeared on the cover of GQ – twice. And after mastering Italian, I became an international super spy. Right now, I’m yachting my way across the Caribbean, stealing top-secret information, and sipping martinis… shaken, not stirred.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Chris', last_name: 'Bacon', password: 'password', username: 'chris.p.bacon', email: 'cbacon@gmail.com', dob: '1990-12-20', image: './images/chris-p-bacon.jpg', bio: 'Surfer. Tech entrepreneur. Frequent traveler. By day I run my investment company. But when the market closes, the suit comes off and it’s time for some fun.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Susan', last_name: 'Silver', password: 'password', username: 'silversurfer', email: 'suzy.s@gmail.com', dob: '1992-04-20', image: './images/susan-silver.jpg', bio: 'I can’t believe I’m doing this! / My friend told me about this site, so I thought I’d try it out.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Eva', last_name: 'Erikson', password: 'password', username: 'EveeE', email: 'erikson_eva@yahoo.com', dob: '1989-09-20', image: './images/eva-erikson.png', bio: 'I am a very outgoing and social woman. I love meeting new and like minded people. I\'m always up for a good time. I\'m very caring, funny and cute. I have a lot of energy and am very entertaining and talkative.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Nikita', last_name: 'Davidson', password: 'password', username: 'nik_davidson', email: 'davidson@gmail.com', dob: '1985-06-20', image: './images/nikita-davidson.jpg', bio: 'I don’t like most guys, but… I am not interested in most guys and besides perhaps that what makes those few unique individuals that I do connect with all more special.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Deloris', last_name: 'Utah', password: 'password', username: 'treasureCat_23', email: 'deloris-loves-hores@hotmail.com', dob: '1994-10-20', image: './images/deloris-utah.jpg', bio: 'I don’t know if the world is going to run forever, but I know I’m not going to be around forever!', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Nikky', last_name: 'Nichols', password: 'password', username: 'little_nikky_123', email: 'trickyNikky@hotmail.com', dob: '1985-02-20', image: './images/nikky-nichols.jpg', bio: 'Maybe it’s about the right time, right place, right person… can online dating be any good? We’ll see :).', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Ula', last_name: 'Dean', password: 'password', username: 'hola_Ula_99', email: 'mean-dean-bean@yahoo.com', dob: '1981-04-20', image: './images/ula-dean.jpg', bio: 'I\'m not down to earth at all. If ou dont reply to my text i will turn up to your house drunk at 3 am crying and trying to vreak in. I hate drinking tea and doing crafts. I hate bikes, the beach, sunshine and parks. And cider, I hate cider.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Danielle', last_name: 'Negan', password: 'password', username: 'dani-dots', email: 'danielles-email@gmail.com', dob: '1989-11-20', image: './images/danielle-negan.jpg', bio: 'Okay, here\'s the thing: I receive tens of thousands of emails a day, and I can\'t possibly take the time to read all of them. Or even some of them. All I know is, please don\'t send me an email if we aren\'t at least a 100% match and 0% enemies. We cannot differ on anything. If we do, you will have to change.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Emily', last_name: 'Elvis', password: 'password', username: 'rockstar14', email: 'queenOfRock@hotmail.com', dob: '1993-02-20', image: './images/emily-elvis.jpg', bio: 'I\'m not sexy or cool or widely accepted, but that\'s good enough for my fans, err, I mean, me.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Sarah', last_name: 'Sleets', password: 'password', username: 'iceQueen', email: 'heats4sleets@gmail.com', dob: '1990-01-20', image: './images/sarah-sleets.jpg', bio: 'Long story but let\'s just say you better be ready for a love affair that\'s out of this world.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Joe', last_name: 'Dirt', password: 'password', username: 'J.D', email: 'joey.d@gmail.com', dob: '1986-05-25', image: './images/joe-dirst.jpg', bio: 'Kitesurfing in Morocco. Hiking a summit trail. Playing my guitar with my closest friends. It’s not a proper weekend if your heart isn’t beating a little faster, right?',  created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Richard', last_name: 'Simmons', password: 'password', username: 'richie', email: 'richie_simms@gmail.com', dob: '1994-11-15', image: './images/richard-simmions.jpg', bio: 'Imagine scuba diving off the coast of Aruba, snorkeling with manta rays and sea turtles, windsurfing, and book-reading on the beach with your favorite people. Yes, I love stepping off a plane in the tropics, which is why I’m Caribbean-bound as often as possible. It’s not always blue waters and rum runners served in coconuts though… So if we hit it off, remind me to tell you about the time I came face to face with a 7-foot sand shark…', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'Alex', last_name: 'Hamilton', password: 'password', username: 'Ahamster', email: 'alex-hammy@gmail.com', dob: '1985-03-21', image: './images/alex-hamilton.jpg', bio: 'Monday through Friday, I’m a general contractor. It’s rewarding to solve real-world problems and see big vacant lots turn into shiny new homes. But my favorite part is driving past an old job site and seeing a happy family playing in the front yard.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }]),

          knex('users').insert([{archived: 0, first_name: 'The Juan', last_name: 'N\'Only', password: 'password', username: 'juanAndOnly', email: 'juan-and-only-1@gmail.com', dob: '1992-10-31', image: './images/juan-n-only.png', bio: 'Kitesurfing in Morocco. Hiking a summit trail. Playing my guitar with my closest friends. It’s not a proper weekend if your heart isn’t beating a little faster, right? Monday through Friday, I manage my business, but when the weekend rolls around… it’s time to play. Maybe you can join… message me, and let’s talk.', created_at: knex.raw('now()'), updated_at: knex.raw('now()') }])
        ]);
      });
    }
  };
