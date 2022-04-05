import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import data from '../../assets/data/mission.json';
import altoLogo from '../../assets/images/Alto_logo.png';
import { TripContext } from '../../contexts/TripContext/TripContext';
import TripInformation from '../TripInformation/TripInformation';
import DriverInformation from "../DriverInformation/DriverInformation";
import VehicleInformation from "../VehicleInformation/VehicleInformation";
import VibeInformation from "../VibeInformation/VibeInformation";
import Footer from "../Footer/Footer";
import './App.scss';
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  const { dispatch } = useContext(TripContext);

  useEffect(() => {
    dispatch(data);
  }, [dispatch])

  return (
    <div className="App">
      <img className="alto-logo" src={altoLogo} alt="altoLogo" />
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <TripInformation />
        </SwiperSlide>
        <SwiperSlide>
          <DriverInformation />
        </SwiperSlide>
        <SwiperSlide>
          <VehicleInformation />
        </SwiperSlide>
        <SwiperSlide>
          <VibeInformation />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
}

export default App;
