import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaGlobe 
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", url: "https://www.facebook.com/ESPE.U" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/espeu" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/espe.u/" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/school/espeu/" },
    { icon: <FaYoutube />, name: "YouTube", url: "https://www.youtube.com/user/ESPEU" },
    { icon: <FaGlobe />, name: "Sitio Web", url: "https://www.espe.edu.ec" }
  ];

  return (
    <footer className="cyber-footer">
      <Container>
        <Row className="footer-content">
          <Col xs={12} md={6} className="contact-column">
            <h3 className="footer-title">ESPE - SANGOLQUÍ</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span className="highlight">Dirección:</span> 
                <span className="text">Av. General Rumiñahui s/n y Ambato, Sangolquí, Ecuador</span>
              </p>
              <p className="contact-item">
                <span className="highlight">Teléfono:</span> 
                <span className="text">+593 2 398-9400</span>
              </p>
              <p className="contact-item">
                <span className="highlight">Email:</span> 
                <span className="text">info@espe.edu.ec</span>
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} className="social-column">
            <h3 className="footer-title">SÍGUENOS</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="copyright-section">
          <Col>
            <p className="copyright-text">
              © {new Date().getFullYear()} Universidad de las Fuerzas Armadas ESPE. 
              Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
