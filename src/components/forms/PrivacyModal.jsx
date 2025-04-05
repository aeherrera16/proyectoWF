import React from "react";
import "./PrivacyModal.scss";

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Aviso de Privacidad</h3>
        <p>
          <strong>Estimado usuario,</strong>
          <br /><br />
          En cumplimiento con la Ley Orgánica de Protección de Datos Personales del Ecuador, 
          le informamos que sus datos personales serán recopilados y procesados exclusivamente 
          para los fines de validación y autenticación dentro de nuestro sistema.
        </p>
        <p><strong>Finalidad del Tratamiento de Datos:</strong></p>
        <ul>
          <li>✅ Garantizar su identidad y acceso seguro al sistema.</li>
          <li>✅ Proteger la integridad de su información.</li>
          <li>✅ Cumplir con normativas de seguridad y prevención de fraudes.</li>
        </ul>
        <p><strong>Confidencialidad y Seguridad:</strong></p>
        <p>
          Nos comprometemos a manejar su información con estricta confidencialidad 
          y aplicar las medidas técnicas y organizativas adecuadas para su protección.
        </p>
        <p><strong>Derechos del Usuario:</strong></p>
        <ul>
          <li>🔹 Acceder, actualizar y rectificar sus datos.</li>
          <li>🔹 Solicitar la eliminación de su información cuando ya no sea necesaria.</li>
          <li>🔹 Limitar el tratamiento de sus datos conforme a la ley.</li>
        </ul>
        <p>📌 <strong>Al continuar con el uso del sistema, usted acepta los términos de este aviso de privacidad.</strong></p>
        <br></br>
        <p><strong>Atentamente,</strong><br />Universidad de las Fuerzas Armadas "ESPE"</p>
        <button className="close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default PrivacyModal;
