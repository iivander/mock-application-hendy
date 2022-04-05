import React, { useContext } from 'react';
import { TripContext } from "../../contexts/TripContext/TripContext";
import TextBlock from '../../library/TextBlock/TextBlock';
import AddressBlock from '../../library/AddressBlock/AddressBlock';
import './TripInformation.scss';
import HorizontalLine from "../../library/HorizontalLine/HorizontalLine";
import editIcon from "../../assets/images/Edit_icon.png";
import ArrivalBlock from "../../library/ArrivalBlock/ArrivalBlock";
import Button from "../../library/Button/Button";

const FareDetails = ({ title, content }) => (
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

const TripInformation = () => {
  const { state: { trip } } = useContext(TripContext);

  const {
    dropoff_location,
    estimated_arrival,
    estimated_fare_min,
    estimated_fare_max,
    notes,
    passengers_min,
    passengers_max,
    payment,
    pickup_location,
  } = trip;

  return (
    <div id="yourTrip">
      <h2 className="your-trip-header-details">
        Your Trip
      </h2>
      <ArrivalBlock
        dateTime={estimated_arrival}
        dropOffLocation={dropoff_location?.name}
      />
      <div className="your-trip-info-details">
        <FareDetails
          title="Estimated Fare:"
          content={`$${parseFloat(estimated_fare_min)} - $${parseFloat(estimated_fare_max)}`}
        />
        <FareDetails
          title="Passengers:"
          content={`${passengers_min} - ${passengers_max}`}
        />
        <FareDetails
          title="Payment:"
          content={payment}
        />
      </div>
      <div className="your-trip-address-details">
        <AddressBlock
          street_line1={pickup_location?.street_line1}
          street_line2={pickup_location?.street_line2}
          state={pickup_location?.state}
          city={pickup_location?.city}
          zipcode={pickup_location?.zipcode}
        />
        <HorizontalLine width="150px" />
        <AddressBlock
          isBold
          street_line1={dropoff_location?.street_line1}
          street_line2={dropoff_location?.street_line2}
          state={dropoff_location?.state}
          city={dropoff_location?.city}
          zipcode={dropoff_location?.zipcode}
        />
      </div>
      <div className="your-trip-note-details">
        <div className="trip-note">
          {notes}
        </div>
        <img
          className="edit-button"
          src={editIcon}
          alt="editIcon"
        />
      </div>
      <Button
        className="your-trip-cancel-button"
        text="CANCEL TRIP"
        disabled
      />
    </div>
  );
}

export default TripInformation;
