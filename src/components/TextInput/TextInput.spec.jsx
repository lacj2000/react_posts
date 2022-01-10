import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from '.';

describe('<TextInput />', () => {
  it('should have a value on TextInput', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} value={'testing'} />);

    const input = screen.getByPlaceholderText('Enter your search...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value', 'testing');
  });

  it('should call onChange function when each key has been pressed', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} />);

    const input = screen.getByPlaceholderText('Enter your search...');

    const typedValue = 'testing';

    userEvent.type(input, typedValue);

    expect(input.value).toBe(typedValue);
    expect(fn).toBeCalledTimes(typedValue.length);
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput onChange={fn} value="test" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
