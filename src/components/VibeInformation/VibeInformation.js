import React, { useContext } from 'react';
import mapOverview from '../../assets/images/Map_overview.png';
import { TripContext } from '../../contexts/TripContext/TripContext';
import Button from "../../library/Button/Button";
import './VibeInformation.scss';
import ArrivalBlock from "../../library/ArrivalBlock/ArrivalBlock";

const VibeInformation = () => {
  const { state: { trip: { dropoff_location, estimated_arrival } } } = useContext(TripContext);

  return (
    <div id="yourVibe">
      <img className="map-overview" src={mapOverview} alt="mapOverview" />
      <h3 className="title vehicle-description-title">
        Your Trip
      </h3>
      <ArrivalBlock
        dateTime={estimated_arrival}
        dropOffLocation={dropoff_location?.name}
      />
      <Button
        className="your-vibe-change-button"
        text="CHANGE VEHICLE VIBE"
      />
    </div>
  );
}

export default VibeInformation;
