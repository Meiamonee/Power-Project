import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Corpo/Corpo.css';


function App() {
    return (
        <div className='carrosel-container'>
            <div className="header-overlay">
                <h1>POWER</h1>
                <div className='teste'>
                    <p>SOBRE</p>
                    <p>CONTATO</p>
                </div>
            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='carrosel-slide' style={{ background: '#ffb3ba' }}>
                        <h3>Slide 1</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='carrosel-slide' style={{ background: '#bae1ff' }}>
                        <h3>Slide 2</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='carrosel-slide' style={{ background: '#baffc9' }}>
                        <h3>Slide 3</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='carrosel-overlay-bg'></div>
            <div className='overlay'>
                <h2 className='title'>Descubra a revolução no mundo dos <br /> periféricos com a Power</h2>
                <p className='descricao'>Aqui, tecnologia de ponta encontra inovação para transformar sua experiência digital. De teclados mecânicos precisos a mouses ergonômicos de alta performance, oferecemos produtos que elevam seu setup a um novo nível. Não se contente com o comum, escolha a excelência que só a Power proporciona. Explore agora e sinta a diferença!</p>
            </div>
        </div>
    );
}

export default App;
