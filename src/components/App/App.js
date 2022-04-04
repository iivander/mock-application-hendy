import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import data from '../../assets/data/mission.json';
import { TripContext, TripProvider } from "../../contexts/TripContext/TripContext";
import Trip from "../Trip/Trip";
import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  const test = useContext(TripContext);
  console.log(test)

  return (
    // <TripProvider>
      <div className="App">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Trip />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    // </TripProvider>
  );
}

export default App;
