import React, { useContext } from 'react';
import driverImage from '../../assets/images/Driver_photo.png';
import { TripContext } from '../../contexts/TripContext/TripContext';
import TextBlock from "../../library/TextBlock/TextBlock";
import Button from "../../library/Button/Button";
import './DriverInformation.scss';

const DriverInformation = () => {
  const { state: { driver: { name, bio } } } = useContext(TripContext);

  return (
    <div id="yourDriver">
      <img className="driver-image" src={driverImage} alt="driverImage" />
      <h3 className="title driver-description-title">
        Your Driver
      </h3>
      <h1>
        {name}
      </h1>
      <TextBlock>
        <TextBlock.HorizontalLine width="50%" />
        <TextBlock.Content>
          {bio}
        </TextBlock.Content>
      </TextBlock>
      <Button
        className="your-driver-cancel-button"
        text="CONTACT DRIVER"
        disabled
      />
    </div>
  );
}

export default DriverInformation;
