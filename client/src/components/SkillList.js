// SkillList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

const SkillList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    console.log("Effect triggered");
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/skills");
        setSkills(response.data.skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {skills.length > 0 ? (
        skills.map((skill, index) => <div key={index}>{skill}</div>)
      ) : (
        <p>No skills available.</p>
      )}
    </div>
  );
};

export default SkillList;
