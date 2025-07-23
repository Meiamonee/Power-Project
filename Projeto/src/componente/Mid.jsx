import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.webp'

import './Mid.css'

function Mid() {
    return (

        <div>
             <h3 className='subtitulo'>NOVIDADES E MAIS VENDIDOS</h3>
            <div className='tudo'>


                <div className='img1'>
                    <img src={img1} alt="" />
                    <h4>JOGUE COMO UMA LENDA</h4>
                    <p>Não importa se você está conquistando mundos de RPG ou apenas brincando com os amigos, a série G5 é o conjunto de itens lendários que o ajudam em sua busca.</p>
                </div>

                <div className='img2'>
                    <img src={img2} alt="" />
                    <h4>BAIXO PERFIL. APRIMORADO.</h4>
                    <p>NOVO! O G915 X LIGHTSPEED TKL oferece as mais recentes inovações em tecnologia de jogos com aprimoramentos de última geração e design compacto, projetado para jogos elevados.</p>
                </div>

                <div className='img3'>
                    <img src={img3} alt="" />
                    <h4>ZERO OPOSIÇÃO</h4>
                    <p>Apresentamos a nova e aprimorada série PRO. Como sempre, desenvolvida em colaboração com os melhores jogadores de eSports do mundo — e projetado para a vitória.</p>
                </div>

            </div>
        </div>



    )
}

export default Mid;