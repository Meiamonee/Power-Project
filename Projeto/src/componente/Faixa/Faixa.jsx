import '../Faixa/Faixa.css';
import Marquee from "react-fast-marquee";
import faixaLogos from '../../assets/faixa.webp'; 


function Faixa() {
      const numberOfLogoStrips = 15; 
  return (
    <div className="sash-container">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
      >
        {Array.from({ length: numberOfLogoStrips }).map((_, i) => (
          <img
            key={i}
            src={faixaLogos}
            alt={`Faixa de Logos Patrocinadores ${i + 1}`}
            className="sash-image"
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Faixa;
