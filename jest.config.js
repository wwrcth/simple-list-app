module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html', 'lcovonly'],
  collectCoverageFrom: ['src/**/{!(*.module),}.ts'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  transformIgnorePatterns: [
    'node_modules',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: true,
    },
  },
};
