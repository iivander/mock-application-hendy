import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('HorizontalLine test suites', () => {
  test('renders a button', () => {
    const buttonText = 'TEST BUTTON'
    const { getByText } = render(<Button text={buttonText} />);
    const button = getByText(buttonText)
    expect(button).toBeInTheDocument();
    expect(button.disabled).toBeFalsy();
  });

  test('renders a disabled button', () => {
    const buttonText = 'TEST BUTTON'
    const { getByText } = render(<Button text={buttonText} disabled />);
    const button = getByText(buttonText)
    expect(button).toBeInTheDocument();
    expect(button.disabled).toBeTruthy();
  });
});
