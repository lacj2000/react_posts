import { render, screen } from '@testing-library/react';
import Posts from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'title 01',
      body: 'body 01',
      url: 'img/test01.png',
    },
    {
      id: 2,
      title: 'title 02',
      body: 'body 02',
      url: 'img/test02.png',
    },
    {
      id: 3,
      title: 'title 03',
      body: 'body 03',
      url: 'img/test03.png',
    },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByAltText(/title/i)).toHaveLength(3);

    expect(screen.getByRole('img', { name: /title 01/i })).toHaveAttribute('src', 'img/test01.png');
  });

  it('must check Post component with empty posts parameter', () => {
    render(<Posts />);

    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
