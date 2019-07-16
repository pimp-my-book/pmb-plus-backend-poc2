
exports.up = function(knex) {
    return knex.schema.createTable('books', function(table){
          table.integer('book_id').primary();
          table.string('title').notNull();
          table.string('author').notNull();
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books')
    
  
};
