import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Picture from "../../assests/picture.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const data = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aliquam euismod id id blandit scelerisque est. Morbi cursus integer et urna. Feugiat donec eu quis ut ornare. Blandit aliquam euismod id id blandit scelerisque est",
      name: "JAMES GUERBY",
      pro: "OverIP",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aliquam euismod id id blandit scelerisque est. Morbi cursus integer et urna. Feugiat donec eu quis ut ornare. Blandit aliquam euismod id id blandit scelerisque est",
      name: "STEPHEN ILLET",
      pro: "IT Solutions",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aliquam euismod id id blandit scelerisque est. Morbi cursus integer et urna. Feugiat donec eu quis ut ornare. Blandit aliquam euismod id id blandit scelerisque est",
      name: "DONALD JACK",
      pro: "Avicenna",
    },
    {
      id: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aliquam euismod id id blandit scelerisque est. Morbi cursus integer et urna. Feugiat donec eu quis ut ornare. Blandit aliquam euismod id id blandit scelerisque est",
      name: "JAMES GUERBY",
      pro: "OverIP",
    },
    {
      id: 5,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aliquam euismod id id blandit scelerisque est. Morbi cursus integer et urna. Feugiat donec eu quis ut ornare. Blandit aliquam euismod id id blandit scelerisque est",
      name: "STEPHEN ILLET",
      pro: "IT Solutions",
    },
    {
      id: 6,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aliquam euismod id id blandit scelerisque est. Morbi cursus integer et urna. Feugiat donec eu quis ut ornare. Blandit aliquam euismod id id blandit scelerisque est",
      name: "DONALD JACK",
      pro: "Avicenna",
    },
  ];
  return (
    <div className="mt-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((obj, i) => (
          <SwiperSlide key={obj.id}>
            <div className=" w-full relative md:h-64 lg:h-80 h-[380px]  flex-shrink-0 ">
              <div className="bg-white top-5 absolute xl:h-56 md:px-10 px-5 rounded-md">
                <p className="text-[#425466] text-center xl:pt-8 pt-6 xl:px-0 md:text-base xl:text-sm text-sm font-medium leading-7">
                  {obj.desc}
                </p>
                <h1 className="font-bold text-sm xl:pt-3 text-[#242555] leading-7 text-center">
                  {obj.name}
                </h1>
                <p className="font-semibold text-xs pb-4 text-[#242555] leading-7 text-center">
                  {obj.pro}
                </p>
                <div className="h-[74px] w-[74px] border-2 border-red-700 absolute rounded-full flex-shrink-0 -bottom-8 right-6">
                  <img src={Picture} alt="Profile" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
