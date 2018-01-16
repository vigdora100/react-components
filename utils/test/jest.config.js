module.exports = {
  "rootDir": "../../",
  "setupTestFrameworkScriptFile": "<rootDir>/utils/test/jest.setup.js",
  // "projects": ["<rootDir>/packages/*"],
  "moduleNameMapper": {
    "\\.(css)$": "<rootDir>/utils/test/styleMock.js",
    "^utils": "<rootDir>/utils/test/jest.utils.js"
  },
  "modulePathIgnorePatterns": ["dist"],
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(garden-react)/)"
  ]
};
