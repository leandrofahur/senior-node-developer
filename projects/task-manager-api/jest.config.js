const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  moduleNameMapper: {
    "^@domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@api/(.*)$": "<rootDir>/src/api/$1",
  },
};
