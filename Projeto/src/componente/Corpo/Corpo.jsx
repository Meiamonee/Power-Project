import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Corpo/Corpo.css';

import Perifericos from '../../assets/setup.webp'
import Controle from '../../assets/controle.webp'
import Teclado from '../../assets/teclado.webp'


function App() {

    const slides = [Perifericos, Controle, Teclado];


    return (
        <div className="main-container">
            <header className="header">
                <div className="logo">POWER</div>
                <nav>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                    <a href="#produtos">PRODUTOS</a>
                </nav>
            </header>

            <Swiper
                className="background-swiper"
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop={true}
                slidesPerView={1}
               
            >
                {slides.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={`${src}?auto=format&fit=crop&w=1600&q=80`}
                            alt={`slide ${index}`}
                            className="slide-img"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="center-text">
                <h1>
                    Descubra a revolução no mundo dos
                    periféricos com a <span className="highlight">Power</span>
                </h1>
                <p>
                    Aqui, tecnologia de ponta encontra inovação para transformar sua experiência digital. De teclados mecânicos
                    precisos a mouses ergonômicos de alta performance, oferecemos produtos que elevam seu setup a um novo nível.
                    Não se contente com o comum, escolha a excelência que só a Power proporciona. Explore agora e sinta a diferença!
                </p>

            </div>

        </div>



    );
}

export default App;
