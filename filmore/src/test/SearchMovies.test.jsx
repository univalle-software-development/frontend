import { render, screen, waitFor } from '@testing-library/react'
import { searchMovies } from '../services/movies';

// Mock de fetch para pruebas
global.fetch = vi.fn()

describe('searchMovies', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  it('should return null when search term is empty', async () => {
    const result = await searchMovies({ search: '' })
    expect(result).toBeNull()
  })

  it('should return movies data when search term is valid', async () => {
    const mockMovies = [
        { id: '1', title: 'Movie 1', year: '2021', image: 'image1.jpg' },
        { id: '2', title: 'Movie 2', year: '2022', image: 'image2.jpg' }
      ]
 

    // Simula la respuesta de la API
    fetch.mockResolvedValueOnce({
      json: async () => mockMovies
    })

    const result = await searchMovies({ search: 'Batman' })

    expect(result).toEqual([
      { id: '1', title: 'Movie 1', year: '2021', image: 'image1.jpg' },
      { id: '2', title: 'Movie 2', year: '2022', image: 'image2.jpg' }
    ])
  })

  it('should throw an error when fetch fails', async () => {
    fetch.mockRejectedValueOnce(new Error('API is down'))

    await expect(searchMovies({ search: 'Batman' })).rejects.toThrow('Error searching movies')
  })
})
