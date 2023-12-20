// server/models/project.js
const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../knexfile");

// Initialize Knex with the development configuration
const knex = Knex(knexConfig.development);

// Bind the Model to the Knex instance
Model.knex(knex);

class Project extends Model {
  static get tableName() {
    return "projects";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "text" },
        // Add other properties as needed
      },
    };
  }
}

module.exports = Project;
