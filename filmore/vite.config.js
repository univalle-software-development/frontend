import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
      environment: 'jsdom',
	  // Enable coverage reporting
     coverage: {
       provider: 'istanbul', 
		 reporter: ['text', 'lcov', 'text', 'clover', 'json'], // Output formats
		 include: ['src/**/*.{js,jsx,ts,tsx}'],
         reportsDirectory: 'coverage', // Directory to output coverage reports
     },
     transform: {
       // Use Babel to transform files
       '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript and JSX files
    },

  },
})
