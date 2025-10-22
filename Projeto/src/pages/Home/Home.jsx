import React from 'react';
import Corpo from '../../componente/Corpo/Corpo';
import Mid from '../../componente/Mid/Mid';
import Down from '../../componente/Down/Down';
import Footer from '../../componente/Footer/Footer';
import Faixa from '../../componente/Faixa/Faixa';

function Home() {
  return (
    <div>
      <Corpo/>
      <Faixa/>
      <Mid/>
      <Down/>
      <Footer/>
    </div>
  );
}

export default Home;