import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App';
import { useMovies } from '../hooks/useMovies';
import '@testing-library/jest-dom';

// Mock del hook useMovies
vi.mock('../hooks/useMovies', () => ({
  useMovies: vi.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    // Reset mock before each test to avoid interference
    useMovies.mockClear();
  });

  it('should show an error message when the search input is empty', () => {
    useMovies.mockReturnValue({
      movies: [],
      loading: false,
      getMovies: vi.fn(),
    });

    render(<App />);

    const input = screen.getByPlaceholderText('Avengers, Star Wars, The Matrix...');
    const button = screen.getByText('Buscar');

    // Simulate typing a valid input
    fireEvent.change(input, { target: { value: 'Avengers' } });

    // Now clear the input
    fireEvent.change(input, { target: { value: '' } });

    // Click the search button
    fireEvent.click(button);

    // Expect the error message to be in the document
    expect(screen.getByText('No se puede buscar una película vacía')).toBeInTheDocument();
  });

  it('should show an error message when the search input is a number', () => {
    useMovies.mockReturnValue({
      movies: [],
      loading: false,
      getMovies: vi.fn(),
    });

    render(<App />);

    const input = screen.getByPlaceholderText('Avengers, Star Wars, The Matrix...');
    const button = screen.getByText('Buscar');

    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.click(button);

    // Expect the error message to be in the document
    expect(screen.getByText('No se encontraron películas para esta búsqueda')).toBeInTheDocument();
  });

  it('should show an error message when the search input has less than 3 characters', () => {
    useMovies.mockReturnValue({
      movies: [],
      loading: false,
      getMovies: vi.fn(),
    });

    render(<App />);

    const input = screen.getByPlaceholderText('Avengers, Star Wars, The Matrix...');
    const button = screen.getByText('Buscar');

    fireEvent.change(input, { target: { value: 'ab' } });
    fireEvent.click(button);

    expect(screen.getByText('No se encontraron películas para esta búsqueda')).toBeInTheDocument();
  });

  it('should not show any error message for valid input', () => {
    useMovies.mockReturnValue({
      movies: [],
      loading: false,
      getMovies: vi.fn(),
    });

    render(<App />);

    const input = screen.getByPlaceholderText('Avengers, Star Wars, The Matrix...');
    const button = screen.getByText('Buscar');

    fireEvent.change(input, { target: { value: 'Avengers' } });
    fireEvent.click(button);

    expect(screen.queryByText((content) => content.includes('No se puede'))).not.toBeInTheDocument();
    expect(screen.queryByText((content) => content.includes('La búsqueda debe'))).not.toBeInTheDocument();
  });
});
