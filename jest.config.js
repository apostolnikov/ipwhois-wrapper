module.exports = {
  verbose: true,
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/mocks/index.ts',
    '<rootDir>/src/__tests__/queries/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 50,
      lines: 60,
      statements: 60,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
