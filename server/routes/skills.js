// server/routes/skills.js
const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

// Define API endpoints for skills
router.get("/", skillController.getAllSkills);
// router.get("/:id", skillController.getSkillById);
// router.post("/", skillController.createSkill);
// Add more routes as needed
// routes/skills.js

module.exports = router;
