import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
  const swiperData = [
    {
      id: 1,
      bgImg: "https://source.unsplash.com/random/?fitness",
      slogan: "Mantenha seu corpo",
      title: "Forte",
      desc: "Prepare-se para queimar seriamente gordura com nossos produtos de alta qualidade.",
    },
    {
      id: 2,
      bgImg: "https://source.unsplash.com/random/?gym",
      slogan: "Apenas acredite em",
      title: "Você mesmo",
      desc: "Estamos aqui para ajudá-lo a alcançar seus objetivos.",
    },
    {
      id: 3,
      bgImg: "https://source.unsplash.com/random/?yoga",
      slogan: "Cresça seu corpo",
      title: "Saudável",
      desc: "Torne seu corpo mais forte com nossos produtos de alta qualidade.",
    },
  ];

  return (
    <>
      <div className="w-full h-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full h-auto"
        >
          {swiperData.map((data) => (
            <SwiperSlide
              key={data.id}
              className="w-full h-[70vh] relative"
              style={{
                backgroundImage: `url(${data.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {" "}
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo text-indigo-400 font-semibold mb-2 uppercase">
                  {data.slogan}
                </h5>
                <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-5x font-bold text-white mb-4 uppercase">
                  {data.title}
                </h1>
                <p className="lg:text-lg md:text-base sm:text-base text-base text-gray-400 font-medium mb-6 text-center">
                  {data.desc}
                </p>
                <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80%] h-14 mt-5 text-xl font-semibold rounded-full">
                  Comaçar
                </PrimaryBtn>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-between justify-between flex-wrap lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 mt-6">
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/20 hover:bg-black/40 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              1200 +
            </h5>
            <p className="text-lg text-gray-600 font-medium">Clientes</p>
          </div>
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/20 hover:bg-black/40 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              150 +
            </h5>
            <p className="text-lg text-gray-600 font-medium">Treinadores</p>
          </div>
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/20 hover:bg-black/40 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              15 +
            </h5>
            <p className="text-lg text-gray-600 font-medium">Anos de experiência</p>
          </div>
          <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/20 hover:bg-black/40 rounded-md ease-out duration-700 cursor-pointer">
            <h5 className="text-4xl text-indigo-400 font-semibold mb-2 uppercase">
              35 +
            </h5>
            <p className="text-lg text-gray-600 font-medium">Academias</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;