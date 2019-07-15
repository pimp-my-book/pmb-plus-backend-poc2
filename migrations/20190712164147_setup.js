
exports.up = function(knex) {
    return knex.schema.createTable('Books', function(table){
          table.integer('book_id').primary();
          table.string('title').notNull();
          table.string('author').notNull();
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Books')
    
  
};
