import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { ServiceData } from "../../constants"; // Adjust the import path as needed

const CarouselSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={500}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                {/* Render the FontAwesome icon here */}
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-pink-600 group-hover:text-pink-400 w-[32px] h-[32px]"
                />
                <h1
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    fontSize: "26px",
                    fontWeight: "bold",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "4px",
                      padding: "0.25em 0.6em",
                    }}
                    className="text-white"
                  >
                    {item.title}
                  </span>
                </h1>

                <p className="lg:text-[18px]">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
