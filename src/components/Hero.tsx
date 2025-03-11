import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
    title: 'Modern Living Spaces',
    description: 'Creating harmonious environments that inspire and delight',
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000',
    title: 'Luxurious Design',
    description: 'Elevating interiors with sophisticated aesthetics',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000',
    title: 'Timeless Elegance',
    description: 'Crafting spaces that stand the test of time',
  },
];

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;