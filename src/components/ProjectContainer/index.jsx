import uniqid from "uniqid";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
import "./ProjectContainer.scss";

export const ProjectContainer = ({ project }) => (
  <div className="card">
    <div className="card_side card_side--front">
      <div>
        <h1>{project.name}</h1>

        <p className="project__description">{project.description}</p>
      </div>

      <div>
        <p style={{ margin: 20 }}>{project.DeploymentSite}</p>
      </div>
    </div>

    <div className="card_side card_side--back">
      <div>
        <h1>Tech for this project</h1>
        <ul className="project__stack">
          {project?.stack?.map((item) => (
            <li key={uniqid()} className="project__stack-item">
              {item}
            </li>
          ))}
          <br />
        </ul>
      </div>

      <div>
        <a
          href={project.sourceCode}
          aria-label="source code"
          className="link link--icon space"
        >
          <GitHub />
        </a>

        <a
          href={project.livePreview}
          aria-label="live preview"
          className="link link--icon"
        >
          <LaunchIcon />
        </a>
      </div>
    </div>
  </div>
);
