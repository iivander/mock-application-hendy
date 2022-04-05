import React from 'react';
import { getDateTimeInAmPmFormat } from "../../utils/utils";
import './ArrivalBlock.scss';

const AMPM_CHAR_COUNT = 2;

const ArrivalBlock = ({ dateTime, dropOffLocation }) => {
  const localDateTime = getDateTimeInAmPmFormat(dateTime);

  const localTime = localDateTime.substring(0, localDateTime.length - AMPM_CHAR_COUNT);
  const localAmPm = localDateTime.slice(-AMPM_CHAR_COUNT);

  return (
    <div className="arrival-time">
      <div className="arrival-time-hour-block">
        <span className="arrival-block-hour-minutes">
          {localTime}
        </span>
        <span className="arrival-block-hour12">
          {localAmPm}
        </span>
      </div>
      <div className="arrival-time-location">
        {`Estimated arrival at ${dropOffLocation}`}
      </div>
    </div>
  )
}

export default ArrivalBlock;
