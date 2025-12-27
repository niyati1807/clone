import React, { useEffect, useState } from "react";
import "./navbar.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import mcd from "/src/assets/mcd.avif";
import gwalia from "/src/assets/gwalia.avif";
import teapost from "/src/assets/teapost.avif";
import subway from "/src/assets/subway.avif";
import jaybhavani from "/src/assets/jaybhavani.avif";
import kfc from "/src/assets/kfc.avif";
import burgerk from "/src/assets/burgerk.png";

// import required modules
import { Pagination } from "swiper/modules";

import "./navbar.css";

const Slider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((rs) => rs.json())
      .then((d) => setData(d.recipes));
  }, []);

  return (
    <div>
      <div className="buttons">
        <button type="button1" className="btn btn-outline-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi pb-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
            />
          </svg>
          Filters
        </button>
        <button type="button2" className="btn btn-outline-secondary">
          Pure Veg
        </button>

        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Cuisines{" "}
        </button>
        <ul className="dropdown-menu dropdown-menu-light">
          <li>
            <a className="dropdown-item active" href="#">
              Click Here for Cuisines
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div className="inspire">
        <h1 className="insphead">Inspiration for your first order</h1>
        <Swiper
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper p-4"
          breakpoints={{
            425: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          <div className="container">
            <ul type="none">
              {data.map((item) => (
                <SwiperSlide className="dishes">
                  <li key={item.id} className="d-flex flex-column align-items-center">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="dish rounded-circle "
                      height={150}
                      width={150}
                    />
                    <h1 className="itemname text-center">{item.name}</h1>
                  </li>{" "}
                </SwiperSlide>
              ))}
            </ul>
          </div>
        </Swiper>
      </div>
      <div className="slider2  p-4">
        <h1 className="sliderhead  p-2 ">Top brands for you</h1>
        {/* pagination={{
          clickable: true,
        }} */}
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            100: {
              slidesPerView: 1.3,
            },
            200: {
              slidesPerView: 1.3,
            },
            425: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide className="cafelist">
            <img
              src={mcd}
              alt=""
              className="cafe rounded-circle "
              height={150}
              width={160}
            />
            <p className="cafename text-center">McDonald's</p>
          </SwiperSlide>
          <SwiperSlide className="cafelist text-center">
            <img
              src={burgerk}
              alt=""
              className="cafe rounded-circle "
              height={150}
              width={160}
            />{" "}
            <p className="cafename text-center">Burger King</p>
          </SwiperSlide>
          <SwiperSlide className="cafelist">
            <img
              src={gwalia}
              alt=""
              className="cafe rounded-circle "
              height={150}
              width={160}
            />
            <p className="cafename text-center">Gwalia Sweets & Fast Food</p>
          </SwiperSlide>
          <SwiperSlide className="cafelist">
            <img
              src={subway}
              alt=""
              className="cafe rounded-circle "
              height={150}
              width={160}
            />{" "}
            <p className="cafename text-center">Subway</p>
          </SwiperSlide>
          <SwiperSlide className="cafelist">
            <img
              src={teapost}
              alt=""
              className="cafe rounded-circle "
              height={150}
              width={160}
            />
            <p className="cafename text-center">Tea Post</p>
          </SwiperSlide>
          <SwiperSlide className="cafelist">
            <img
              src={jaybhavani}
              alt=""
              className="cafe rounded-circle "
              height={150}
              width={160}
            />
            <p className="cafename text-center">Jay Bhavani Vadapav</p>
          </SwiperSlide>
          <SwiperSlide className="cafelist">
            <img
              src={kfc}
              alt=""
              className="cafe rounded-circle "
              height={150}
              width={160}
            />{" "}
            <p className="cafename text-center">KFC</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
