import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import '../Down/Down.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Down.css';

// Usando a imagem existente no projeto
import Perifericos from '../../assets/fone.webp';

function Down() {
    const slides = [
        {
            id: 1,
            title: 'PERIFÉRICOS DE',
            highlight: 'ALTA QUALIDADE',
            description: 'Equipamentos profissionais para gamers que buscam precisão e performance em cada jogada.',
            image: Perifericos
        },
        {
            id: 2,
            title: 'TECNOLOGIA',
            highlight: 'AVANÇADA',
            description: 'Produtos desenvolvidos com as mais modernas tecnologias para proporcionar a melhor experiência.',
            image: Perifericos
        },
        {
            id: 3,
            title: 'DESEMPENHO',
            highlight: 'SUPERIOR',
            description: 'Alcance novos patamares de performance com equipamentos que fazem a diferença.',
            image: Perifericos
        },
        {
            id: 4,
            title: 'QUALIDADE',
            highlight: 'PREMIUM',
            description: 'Materiais de primeira linha e construção robusta para durabilidade excepcional.',
            image: Perifericos
        }
    ];

    return (
        <div className="down-carousel">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                navigation
                pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="down-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="down-slide-content">
                            <div className="down-slide-text">
                                <h2 className="down-slide-title">
                                    {slide.title}
                                    <br />
                                    <span className="down-slide-highlight">{slide.highlight}</span>
                                </h2>
                                <p className="down-slide-description">{slide.description}</p>
                            </div>
                            <div className="down-slide-image">
                                <img src={slide.image} alt="Periférico Gaming Power" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Down;