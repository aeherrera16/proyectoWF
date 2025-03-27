import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Home.scss";
import Navbar from "./Navbar";
import imageBanner from "../../assets/images/principal.jpg";
import { Container, Row, Col } from "react-bootstrap";
import TopicCard from "./TopicCard";
import { FaHome, FaBrain, FaExclamationCircle, FaShieldAlt, FaBullhorn } from "react-icons/fa";

// Imágenes
import CiberacosoImg from "../../assets/images/Ciberacoso.jpg";
import SaludmentalImg from "../../assets/images/saludMental.png";
import PalabrasAcoso from "../../assets/images/palabrasAcoso.jpg";
import ViolenciaDigital from "../../assets/images/ViolenciaDigital.png";
import Bullying from "../../assets/images/Bullying.webp";

// Función para animaciones en el scroll
const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const topics = [
    {
      id: "ciberbullying",
      title: "¿Qué es el Ciberbullying?",
      icon: <FaExclamationCircle />,
      imageSrc: CiberacosoImg,
      description: "El ciberbullying es el acoso que se hace a una persona a través de internet o medios electrónicos. Puede incluir amenazas, humillaciones, o publicaciones de contenido perjudicial. ."
    },
    {
      id: "salud-mental",
      title: "Impacto en la Salud Mental",
      icon: <FaBrain />,
      imageSrc: SaludmentalImg,
      description: "La salud mental en el ciberespacio se refiere al bienestar emocional, psicológico y social de las personas en el entorno digital."
    },
    {
      id: "palabras-acoso",
      title: "Palabras de Acoso",
      icon: <FaBullhorn />,
      imageSrc: PalabrasAcoso,
      description: "Las palabras de acoso son aquellas que se usan para humillar, amenazar o intimidar a otra persona. Se pueden expresar de manera directa o indirecta, y pueden ocurrir en persona o en línea."
    },
    {
      id: "violencia-digital",
      title: "¿Qué es la Violencia Digital?",
      icon: <FaShieldAlt />,
      imageSrc: ViolenciaDigital,
      description: "La violencia digital es toda acción dolosa realizada mediante el uso de tecnologías de la información y la comunicación, por la que se exponga, distribuya, difunda, exhiba, transmite; comercialice, oferte, intercambie o comparta imágenes, audios, o videos reales o simulados de contenido intimo sexual de una persona sin su consentimiento."
    },
    {
      id: "bullying",
      title: "¿Qué es el Bullying?",
      icon: <FaHome />,
      imageSrc: Bullying,
      description: "El bullying, o acoso escolar, es un comportamiento agresivo y repetitivo que busca causar daño o intimidar a una persona, a menudo en un entorno escolar, creando un desequilibrio de poder. ."
    },
  ];

  return (
    <div className="homepage">
      <Navbar />

      {/* Hero con animación */}
      <motion.header className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <div className="hero-content text-center">
          <h1>CYBERACOSO Y PALABRAS DE ODIO EN EL CYBERESPACIO</h1>
          <motion.p className="tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            El peligro invisible del mundo digital
          </motion.p>
        </div>
      </motion.header>

      {/* Banner con Parallax */}
      <section className="main-banner">
        <div className="banner-overlay"></div>
        <motion.img
          src={imageBanner}
          alt="Marketing Agency"
          className="banner-image img-fluid"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="banner-text text-center">
          <p>"Las palabras tienen poder, y en el mundo digital, ese poder puede ser devastador."</p>
        </div>
      </section>

      {/* Navegación lateral */}
      <nav className="side-nav">
        <div className="side-nav-header">Temas</div>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <a href={`#${topic.id}`} className="nav-link">
                {topic.icon} <span>{topic.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sección de Temas con animación en scroll */}
      <section className="topics-section">
        <Container>
          <Row className="justify-content-center">
            {topics.map((topic) => (
              <Col key={topic.id} xs={12} md={10} lg={9} className="mb-4">
                <AnimatedSection>
                  <div id={topic.id} className="topic-section">
                    <TopicCard
                      title={topic.title}
                      youtubeLink={topic.youtubeLink}
                      imageSrc={topic.imageSrc}
                      description={topic.description}
                    />
                  </div>
                </AnimatedSection>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
