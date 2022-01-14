import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from '.';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts/', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title 1',
          body: 'body 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'title 2',
          body: 'body 2',
        },
        {
          userId: 3,
          id: 3,
          title: 'title 3',
          body: 'body 3',
        },
        {
          userId: 4,
          id: 4,
          title: 'title 4',
          body: 'body 4',
        },
      ]),
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos/', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          albumId: 1,
          id: 1,
          title: 'img 1',
          url: 'img1',
          thumbnailUrl: 'img1.jpg',
        },
        {
          albumId: 1,
          id: 2,
          title: 'img 2',
          url: 'img2',
          thumbnailUrl: 'img2.jpg',
        },
        {
          albumId: 1,
          id: 3,
          title: 'img 3',
          url: 'img3',
          thumbnailUrl: 'img3.jpg',
        },
        {
          albumId: 1,
          id: 4,
          title: 'img 4',
          url: 'img4',
          thumbnailUrl: 'img4.jpg',
        },
      ]),
    );
  }),
];

const mockServer = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    mockServer.listen();
  });

  afterEach(() => mockServer.resetHandlers());

  afterAll(() => {
    mockServer.close();
  });

  it('should render search, posts, and load more', async () => {
    render(<Home />);
    const withoutPosts = screen.getByText('This search did not find matching posts');
    await waitForElementToBeRemoved(withoutPosts);
    screen.debug();
  });
});
