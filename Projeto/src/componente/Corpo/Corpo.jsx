import '../Corpo/Corpo.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Importando Autoplay
import 'swiper/css';
import 'swiper/css/pagination';

import Perifericos from '../../assets/Perifericos.webp';

function Corpo() {
    return (
        <div className='container'>
            <div className='Corpo'>
            <div className='corpo-texto'>
                <h2 className='titulo'>
                    Descubra a revolução no mundo dos <br /> periféricos com a <span className="Power">Power</span> !
                </h2>

                <p className='introducao'> 
                    Aqui, tecnologia de ponta encontra inovação para transformar sua experiência digital.
                    De teclados mecânicos precisos a mouses ergonômicos de alta performance, oferecemos produtos
                    que elevam seu setup a um novo nível. Não se contente com o comum, escolha a excelência que só a Power proporciona. Explore agora e sinta a diferença!
                </p>
            </div>

            <Swiper
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]} // Autoplay adicionado aqui
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Perifericos} alt="Teclado mecânico Power" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Perifericos} alt="Mouse ergonômico Power" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Perifericos} alt="Headset gamer Power" />
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
}

export default Corpo;
