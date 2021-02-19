module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts', '**/*.snapshot.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  coverageDirectory: 'reports/coverage',
  collectCoverageFrom: [
    'lib/*.{js,jsx,ts}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
