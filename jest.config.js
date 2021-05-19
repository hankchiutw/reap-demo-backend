module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['text', 'text-summary', 'html-spa'],
  coverageDirectory: '../coverage',
  rootDir: 'src',
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/$1',
  },
};
