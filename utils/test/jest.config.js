module.exports = {
  "rootDir": "../../",
  "setupTestFrameworkScriptFile": "<rootDir>/utils/test/jest.setup.js",
  // "projects": ["<rootDir>/packages/*"],
  "moduleNameMapper": {
    "\\.(css)$": "identity-obj-proxy",
    "^utils": "<rootDir>/utils/test/jest.utils.js"
  },
  "modulePathIgnorePatterns": ['packages\/.[a-z]*\/dist'],
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(garden-react)/)"
  ]
};
