// client/src/components/ProjectList.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Link } from "@mui/material";

const ProjectItem = ({ title, description, url }) => (
  <Card variant="outlined" style={{ marginBottom: "15px" }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
      {url && (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          View Project
        </Link>
      )}
    </CardContent>
  </Card>
);

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
