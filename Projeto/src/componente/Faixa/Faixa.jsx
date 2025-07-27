import '../Faixa/Faixa.css';
import Marquee from "react-fast-marquee";

// Importação corrigida (Corsair com logo preta)
import logitech from '../../assets/logi.webp';
import corsair from '../../assets/corsair.webp'; // <-- ATUALIZE AQUI
import hyperx from '../../assets/hyperx.webp';
import steel from '../../assets/Steelseries.webp';
import red from '../../assets/redragon.webp';
import cooler from '../../assets/cooler.svg';
import razer from '../../assets/razer.webp';
import rog from '../../assets/rog.webp';
import aoc from '../../assets/aoc.webp';

const marcas = [
  { nome: 'Logitech', imagem: logitech },
  { nome: 'Corsair', imagem: corsair },
  { nome: 'HyperX', imagem: hyperx },
  { nome: 'SteelSeries', imagem: steel },
  { nome: 'Redragon', imagem: red },
  { nome: 'Cooler Master', imagem: cooler },
  { nome: 'Razer', imagem: razer },
  { nome: 'ROG', imagem: rog },
  { nome: 'AOC', imagem: aoc },
  
];

function Faixa() {
  return (
    <div className="marquee-container">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {marcas.map((marca) => (
          <div className="marca" key={marca.nome}>
            <img
              src={marca.imagem}
              alt={marca.nome}
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Faixa;
