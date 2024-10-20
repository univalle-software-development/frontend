module.exports = {
  preset: 'vite',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
      'src/**/*.{js,jsx,tsx}', // Adjust this pattern based on your file structure
    '!src/index.js', // Exclude entry point
      '!src/**/*.test.{js,jsx,tsx}', // Exclude test files
  ],
  coverageReporters: ['text', 'lcov'], // You can add more reporters as needed
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Optional: for setting up testing library
};
