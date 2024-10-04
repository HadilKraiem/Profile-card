import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

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
      <Skill skill="React" emoji="😍" color="pink" />
      <Skill skill="HTML" emoji="😎" color="yellow" />
      <Skill skill="CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="🥰" color="green" />
      <Skill skill="Git and Github" emoji="🤩" color="purple" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>

      <span>{props.emoji}</span>
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
