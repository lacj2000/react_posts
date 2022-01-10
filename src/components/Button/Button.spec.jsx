import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('<Button />', () => {
  it('should render the Button with the text "Load More"', () => {
    render(<Button text="Load more" />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disable when disabled is true', () => {
    render(<Button text="Load More" disabled={true} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /Load More/i });

    expect(button).toBeDisabled();
  });

  it('should be enable when disabled is false', () => {
    render(<Button text="Load More" disabled={false} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /Load More/i });
    expect(button).toBeEnabled();
  });
});
