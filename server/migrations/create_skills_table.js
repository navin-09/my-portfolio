// migrations/yyyy_create_skills_table.js

exports.up = function (knex) {
  return knex.schema.createTable("skills", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("skills");
};
