// migrations/xxxx_create_projects_table.js

exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.string("url");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
