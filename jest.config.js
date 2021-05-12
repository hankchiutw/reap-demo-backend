module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['text', 'text-summary', 'html-spa'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
};
