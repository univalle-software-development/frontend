import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'

// Prueba para verificar que el componente App se renderiza correctamente
test('renders the App component', () => {
  render(<App />); // Renderizamos el componente App
  
  // Aseguramos que se renderiza el texto de cabecera "Buscador de películas"
  const headerElement = screen.getByText(/Buscador de películas/i);
  
  // Verificamos si el texto está presente en el documento
  expect(headerElement).toBeInTheDocument();
});
