import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div className="avatar">
      <img src="avatar.png" alt="avatar pic" />
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h1>Hadil Kraiem</h1>
      <p>
        Front-end web developer and primary school teacher. I enjoy playing
        board and card games, going for runs, and binge-watching TV shows.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}
function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>

      <span>{skillObj.level}</span>
      <span>{`${
        skillObj.level === "advanced"
          ? "💪"
          : skillObj.level === "intermediate"
          ? "👍"
          : skillObj.level === "beginner"
          ? "👶"
          : null
      }`}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
