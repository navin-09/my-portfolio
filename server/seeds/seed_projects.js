// seeds/seed_projects.js

exports.seed = function (knex) {
  return knex("projects")
    .del()
    .then(function () {
      return knex("projects").insert([
        {
          title: "Sample Project 1",
          description: "Description for sample project 1",
          url: "https://example.com/project1",
        },
        // Add more projects as needed
      ]);
    });
};
