// server.js
const express = require("express");
const Knex = require("knex");
const { Model } = require("objection");
const cors = require("cors");
const bodyParser = require("body-parser");
const projectsRouter = require("./routes/projects");
const skillsRouter = require("./routes/skills");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig.development);

// API routes
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/projects", projectsRouter);
app.use("/api/skills", skillsRouter);

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
