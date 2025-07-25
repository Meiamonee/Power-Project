import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SOBRE</h3>
          <ul>
            <li><a href="#">POLÍTICA DE PRIVACIDADE</a></li>
            <li><a href="#">TERMOS DE USO</a></li>
            <li><a href="#">PREFERÊNCIAS DE E-MAIL</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>FAZ CONTATO</h3>
          <ul>
            <li><a href="#">DEFINIÇÕES DE COOKIE</a></li>
            <li><a href="#">SUSTENTABILIDADE</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>CARREIRAS</h3>
          <ul>
            <li><a href="#">MAPA DO SITE</a></li>
            <li><a href="#">RECICLANDO</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>PARCEIROS</h3>
          <ul>
            <li><a href="#">INVESTIDORES</a></li>
            <li><a href="#">IMPRENSA</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Power. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;