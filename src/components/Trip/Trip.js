import React from 'react';
import altoLogo from '../../assets/images/Alto_logo.png';

const Trip = () => {
  return (
    <div id="yourTrip">
      {/* Position Absolute this */}
      <img className="altoLogo" src={altoLogo} alt="altoLogo" />
      <div>
        Your Trip
      </div>
      <div>
      </div>
    </div>
  );
}

export default Trip;
