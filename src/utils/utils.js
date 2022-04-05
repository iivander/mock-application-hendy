export const getDateTimeInAmPmFormat = (dateTime) => new Date(dateTime).toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});
