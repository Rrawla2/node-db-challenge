
exports.up = function(knex) {
  return knex.schema
    .createTable("project", table => {
        table.increments()
        table.string("project_title", 128)
            .notNullable()
        table.text("project_descr", 255)
        table.boolean("complete", false)
            .notNullable()
    })
    .createTable
};

exports.down = function(knex) {
  
};
