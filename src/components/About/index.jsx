import { GitHub, LinkedIn } from "@mui/icons-material";
import { about } from "../portfolio";
import "./About.scss";

export const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1 className="moveLeft">
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        <a href={social.github} aria-label="github" className="link link--icon">
          <GitHub />
        </a>

        <a
          href={social.linkedin}
          aria-label="linkedin"
          className="link link--icon"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  );
};
