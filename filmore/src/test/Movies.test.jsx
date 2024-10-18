import { render, screen } from '@testing-library/react';
import { Movies } from '../components/Movies';
import '@testing-library/jest-dom';

test('renders list of movies when movies are provided', () => {
  const movies = [
    { id: 1, title: 'Movie 1', year: '2020', image: 'movie1.jpg' },
    { id: 2, title: 'Movie 2', year: '2021', image: 'movie2.jpg' }
  ];

  render(<Movies movies={movies} />);

  expect(screen.getByText('Movie 1')).toBeInTheDocument();
  expect(screen.getByText('Movie 2')).toBeInTheDocument();
});

test('renders no movies found message when no movies are provided', () => {
  render(<Movies movies={[]} />);

  expect(screen.getByText('No se encontraron películas para esta búsqueda')).toBeInTheDocument();
});
