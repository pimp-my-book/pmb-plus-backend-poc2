
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('Books', function(table){
          table.integer('book_id').primary();
          table.string('title').notNull();
          table.string('author').notNull();
      })
  
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Books')
    ])
  
};
