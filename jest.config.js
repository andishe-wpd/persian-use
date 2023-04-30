module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    roots: [
      '<rootDir>/src'
    ],
    testMatch: [
      '**/*.test.ts'
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    }
  };
  