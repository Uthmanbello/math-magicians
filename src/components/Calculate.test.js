import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('updates the display when buttons are clicked', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    const display = getByTestId('display');

    fireEvent.click(getByText('1'));
    expect(display.textContent).toBe('1');

    fireEvent.click(getByText('+'));
    expect(display.textContent).toBe('1');

    fireEvent.click(getByText('2'));
    expect(display.textContent).toBe('2');

    fireEvent.click(getByText('='));
    expect(display.textContent).toBe('3');
  });
});
