// server/routes/projects.js
const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// Define API endpoints for projects
router.get("/", projectController.getAllProjects);
// router.get("/:id", projectController.getProjectById);
// router.post("/", projectController.createProject);
// Add more routes as needed

module.exports = router;
