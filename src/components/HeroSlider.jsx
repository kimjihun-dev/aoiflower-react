import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import './HeroSlider.css'


const HeroSlider = () => {
    
    const slides = [
        {
          image: "https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg",
          title: "아오이 플라워",
          description: "당신의 특별한 순간을 꽃으로 채워드립니다"
        },
        {
          image: "https://images.pexels.com/photos/1158783/pexels-photo-1158783.jpeg",
          title: "프리저브드 플라워",
          description: "영원히 간직하고 싶은 순간"
        },
        {
          image: "https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg",
          title: "식물 컬렉션",
          description: "일상에 자연의 생기를 더하세요"
        },
        {
          image: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg",
          title: "시즌 플라워",
          description: "계절마다 새로운 꽃과 만나보세요"
        }
      ];

      return (
        <section className="hero-section">
            <Swiper 
            modules={[Autoplay ]} 
            autoplay={{ delay: 3000, disableOnInteraction: false,}}
            loop={true}
            className="hero-swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <div className="image-overlay"></div>
                            <img src={slide.image} alt={`Flower arrangement ${index + 1}`} />
                            <div className="slide-text">
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
      )
}

export default HeroSlider