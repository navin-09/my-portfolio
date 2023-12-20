// seeds/seed_skills.js

exports.seed = function (knex) {
  return knex("skills")
    .del()
    .then(function () {
      return knex("skills").insert([
        { name: "JavaScript" },
        { name: "React" },
        { name: "Node.js" },
        // Add more skills as needed
      ]);
    });
};
