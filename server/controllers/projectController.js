// server/controllers/projectController.js
const Project = require("../models/project");

const projectController = {
  getAllProjects: async (req, res) => {
    try {
      const projects = await Project.query();
      res.json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createProject: async (req, res) => {
    const { name, description } = req.body;

    try {
      const newProject = await Project.query().insert({ name, description });
      res.json(newProject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateProject: async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const updatedProject = await Project.query().patchAndFetchById(id, {
        name,
        description,
      });
      res.json(updatedProject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteProject: async (req, res) => {
    const { id } = req.params;

    try {
      await Project.query().deleteById(id);
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = projectController;
