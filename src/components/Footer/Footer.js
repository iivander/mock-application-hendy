import React, { useContext } from 'react';
import profileIcon from '../../assets/images/Profile_icon.png';
import vibesIcon from '../../assets/images/Vibes_icon.png';
import { TripContext } from "../../contexts/TripContext/TripContext";
import { getDateTimeInAmPmFormat } from "../../utils/utils";
import './Footer.scss';

const Footer = () => {
  const { state: { trip: { dropoff_location, estimated_arrival } } } = useContext(TripContext);

  return (
    <div className="footer">
      <img className="profile-icon" src={profileIcon} alt="profileIcon" />
      <div className="footer-information">
        <span className="footer-top">
          {dropoff_location?.name}
        </span>
        <span className="footer-bottom">
          {`ETA: ${getDateTimeInAmPmFormat(estimated_arrival)}`}
        </span>
      </div>
      <img className="vibes-icon" src={vibesIcon} alt="vibesIcon" />
    </div>
  )
}

export default Footer;
