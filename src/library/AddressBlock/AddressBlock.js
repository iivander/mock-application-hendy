import React from 'react';
import TextBlock from '../TextBlock/TextBlock';

const AddressBlock = ({
  isBold,
  street_line1,
  street_line2,
  state,
  city,
  zipcode,
}) => (
  <TextBlock>
    <TextBlock.Content isBold={isBold}>
      {street_line1}
    </TextBlock.Content>
    <TextBlock.Content isBold={isBold}>
      {street_line2}
    </TextBlock.Content>
    <TextBlock.Content isBold={isBold}>
      {`${city}, ${state} ${zipcode}`}
    </TextBlock.Content>
  </TextBlock>
)

export default AddressBlock;
