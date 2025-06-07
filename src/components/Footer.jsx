import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function Footer() {
  const iconStyle = {
    color: "#333",
    transition: "transform 0.2s ease",
    fontSize: "24px"
  };

  const handleHover = e => e.currentTarget.style.transform = "scale(1.3)";
  const handleLeave = e => e.currentTarget.style.transform = "scale(1)";

  return (
    <footer style={{
      backgroundColor: "#f1f1f1",
      color: "#333",
      textAlign: "center",
      padding: "30px 20px",
      marginTop: "50px"
    }}>
      <div style={{
        fontSize: "24px",
        display: "flex",
        justifyContent: "center",
        gap: "25px"
      }}>
        {/* GitHub */}
        <a
          href="https://github.com/GaboLescanoGit"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="tooltip-github"
          data-tooltip-content="Mi GitHub"
          style={iconStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <Tooltip id="tooltip-github" />

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          data-tooltip-id="tooltip-linkedin"
          data-tooltip-content="Mi LinkedIn"
          style={iconStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <Tooltip id="tooltip-linkedin" />

        {/* WhatsApp */}
        <span
          data-tooltip-id="tooltip-whatsapp"
          data-tooltip-content="+54 381 459 0520"
          style={{ ...iconStyle, cursor: "default" }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </span>
        <Tooltip id="tooltip-whatsapp" />

        {/* Email */}
        <span
          data-tooltip-id="tooltip-email"
          data-tooltip-content="gaboles1996@gmail.com"
          style={{ ...iconStyle, cursor: "default" }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <Tooltip id="tooltip-email" />
      </div>
    </footer>
  );
}

export default Footer;
