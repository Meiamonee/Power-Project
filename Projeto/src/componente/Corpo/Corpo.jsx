import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Corpo/Corpo.css';

import Perifericos from '../../assets/setup.webp'
import Controle from '../../assets/controle.webp'
import Teclado from '../../assets/teclado.webp'


function App() {
    return (
        <div className='carrosel-container'>
            <div className="header-overlay">
                <h1 className='logo-nome'>POWER</h1>
                <div className='teste'>
                    <p>SOBRE</p>
                    <p>CONTATO</p>
                </div>
            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='carrosel-slide' style={{ background: '#ffb3ba' }}>
                        <img src={Perifericos} alt="periferico" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='carrosel-slide' style={{ background: '#bae1ff' }}>
                        <img src={Controle} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='carrosel-slide' style={{ background: '#baffc9' }}>
                        <img src={Teclado} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='carrosel-overlay-bg'></div>
            <div className='overlay'>
                <h2 className='title'>Descubra a revolução no mundo dos <br /> periféricos com a <strong className='power-azul'>Power</strong></h2>
                <p className='descricao'>Aqui, tecnologia de ponta encontra inovação para transformar sua experiência digital. De teclados mecânicos precisos a mouses ergonômicos de alta performance, oferecemos produtos que elevam seu setup a um novo nível. Não se contente com o comum, escolha a excelência que só a Power proporciona. Explore agora e sinta a diferença!</p>
            </div>
        </div>
    );
}

export default App;
