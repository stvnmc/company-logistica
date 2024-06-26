import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Dirección: Calle Principal, Ciudad, País</p>
          <p>Teléfono: +123456789</p>
          <p>Email: info@empresa.com</p>
        </div>
        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li>Envíos nacionales e internacionales</li>
            <li>Seguimiento de paquetes</li>
            <li>Embalaje seguro</li>
            <li>Entrega rápida</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <ul className="social-links">
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
