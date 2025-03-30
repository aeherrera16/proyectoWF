import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.scss";
import logo from "../../assets/images/espeL.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleLogout = () => {
    navigate("/login");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar-cyber').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setActiveMenu(null);
  };

  const handleVideoClick = (topicId) => {
    scrollToSection(topicId);
    setTimeout(() => {
      const element = document.getElementById(topicId);
      if (element) {
        const videoButton = element.querySelector('.video-button');
        if (videoButton) {
          videoButton.click();
        }
      }
    }, 800);
  };

  const menuItems = [
    {
      title: "TEMAS PRINCIPALES",
      subItems: [
        { name: "Ciberbullying", id: "ciberbullying", action: scrollToSection },
        { name: "Impacto en la Salud Mental", id: "salud-mental", action: scrollToSection },
        { name: "Palabras de Acoso", id: "palabras-acoso", action: scrollToSection },
        { name: "¿Qué es la Violencia Digital?", id: "violencia-digital", action: scrollToSection },
        { name: "¿Qué es el Bullying?", id: "bullying", action: scrollToSection }
      ]
    },
    {
      title: "VIDEOS DE AYUDA",
      subItems: [
        { name: "Video-Ciberbullying", id: "ciberbullying", action: handleVideoClick },
        { name: "Video-Impacto en la Salud Mental", id: "salud-mental", action: handleVideoClick },
        { name: "Video-Palabras de Acoso", id: "palabras-acoso", action: handleVideoClick },
        { name: "Video-¿Qué es la Violencia Digital?", id: "violencia-digital", action: handleVideoClick },
        { name: "Video-¿Qué es el Bullying?", id: "bullying", action: handleVideoClick }
      ]
    }
  ];

  return (
    <motion.nav 
      className="navbar-cyber"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="menu-item"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <motion.div
                className="main-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.div>

              {activeMenu === index && (
                <motion.div
                  className="submenu"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <motion.div
                      key={subIndex}
                      className="submenu-item"
                      whileHover={{ x: 10 }}
                      onClick={() => subItem.action(subItem.id)}
                    >
                      {subItem.name}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="navbar-right">
          <motion.button
            onClick={handleLogout}
            className="logout-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cerrar Sesión
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;