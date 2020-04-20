
exports.up = function(knex) {
  return knex.schema
    .createTable("project", table => {
        table.increments()
        table.string("project_title", 128)
            .notNullable()
        table.text("project_descr", 255)
        table.boolean("complete")
            .defaultTo(false)
            .notNullable()
    })
    .createTable("resource", table => {
        table.increments()
        table.string("resource_name")
            .notNullable()
        table.string("resource_descr", 128)
        // table
        //     .integer("project_id")
        //     .unsigned()
        //     .notNullable()
        //     .references("id")
        //     .inTable("project")
        //     .onUpdate("CASCADE")
        //     .onDelete("CASCADE")
    })
    .createTable("task", table => {
        table.increments()
        table.text("task_descr", 255)
            .notNullable()
        table.text("task_notes", 255)
        table.boolean("complete")
            .defaultTo(false)
            .notNullable()
        table.integer("project_id")
            .unsigned()
            .references("id")
            .inTable("project")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
    .createTable("project_resource", table => {
        table.increments()
        table.integer("project_id")
            .unsigned()
            .references("id")
            .inTable("project")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.integer("resource_id")
            .unsigned()
            .references("id")
            .inTable("resource")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project")
};
