exports.seed = function(knex, Promise) {
  return seedMessagesTable()

  function seedMessagesTable() {
    return knex('messages').del()
      .then(function() {
        return Promise.all([
          knex('messages').insert(
            {
              recipient: 4,
              sender: 15,
              content: 'Is your name Google? Because you have everything I\'ve been searching for. Hi I\'m Juan :).'
            }),


          knex('messages').insert(
            {
              recipient: 4,
              sender: 15,
              content: 'If you were a web browser, you\'d be called a Fire-foxy lady.'
            }),


          knex('messages').insert(
            {
              recipient: 15,
              sender: 4,
              content: 'Hi!'
            }),


          knex('messages').insert(
            {
              recipient: 4,
              sender: 15,
              content: 'Girl, you are hotter than the bottom of my laptop.'
            }),


          knex('messages').insert(
            {
              recipient: 15,
              sender: 4,
              content: 'I have a boyfriend'
            }),


          knex('messages').insert(
            {
              recipient: 4,
              sender: 15,
              content: 'Oh... well I wrote you a poem, Roses are #ff0000, violets are #0000ff, all my base are belong to you.'
            })
          ]);
        });
      }
    };
