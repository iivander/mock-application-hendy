import React, { useContext } from 'react';
import vehicleImage from '../../assets/images/Vehicle_photo.png';
import { TripContext } from '../../contexts/TripContext/TripContext';
import TextBlock from "../../library/TextBlock/TextBlock";
import Button from "../../library/Button/Button";
import './VehicleInformation.scss';

const VehicleDetails = ({ title, content }) => (
  <TextBlock>
    <TextBlock.HorizontalLine />
    <TextBlock.Content>
      {title}
    </TextBlock.Content>
    <TextBlock.Content isBold>
      {content}
    </TextBlock.Content>
  </TextBlock>
)

const DriverInformation = () => {
  const { state: { vehicle: { color, license, make } } } = useContext(TripContext);

  return (
    <div id="yourVehicle">
      <img className="vehicle-image" src={vehicleImage} alt="vehicleImage" />
      <h3 className="title vehicle-description-title">
        Your Vehicle
      </h3>
      <h1>
        {license}
      </h1>
      <div className="your-vehicle-details">
        <VehicleDetails
          title="Make / Model"
          content={make}
        />
        <VehicleDetails
          title="Color"
          content={color}
        />
      </div>
      <Button
        className="your-vehicle-cancel-button"
        text="IDENTIFY VEHICLE"
        disabled
      />
    </div>
  );
}

export default DriverInformation;
