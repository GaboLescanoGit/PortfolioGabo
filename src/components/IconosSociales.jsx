import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function IconosSociales() {
  return (
    <div style={{
      position: "fixed",
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      zIndex: 1000
    }}>
      <a
        href="https://github.com/GaboLescanoGit"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#333", fontSize: "24px" }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://linkedin.com/in/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0077b5", fontSize: "24px" }}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="mailto:gaboles1996@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#d44638", fontSize: "24px" }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default IconosSociales;
