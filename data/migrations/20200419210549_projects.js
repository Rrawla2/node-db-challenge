
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
    .createTable("resource", table => {
        table.increments()
        table.string("resource_name")
            .notNullable()
        table.string("resource_descr", 128)
    })
};

exports.down = function(knex) {
  
};
