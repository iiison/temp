module.exports = {
  verbose : true,
  collectCoverage : true,
  collectCoverageFrom : [
    '**/app/**/*.{js,jsx}',
    '!**/app/**/*[t|T]est*.{js,jsx}',
    '!**/node_modules/**',
    '!**/build/**'
  ],
  transform : {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  globals : {
    env : {
      isProd  : false,
      isDev   : true,
      command : 'start'
    }
  },
  moduleNameMapper : {
    '^.*[.](css|CSS)$': 'identity-obj-proxy'
  },
  moduleFileExtensions : [
    'js',
    'jsx',
    'json',
    'css'
  ],
  testMatch : ["<rootDir>/app/**/*.test.js"],
  modulePaths : [
    '/app'
  ],
  moduleDirectories : [
    'node_modules',
    'app'
  ],
  setupFiles : [ './setupJest.js' ],
  transformIgnorePatterns : [
    'node_modules/(?!react-state-form)'
  ],
  setupFilesAfterEnv : [ '<rootDir>/setupTests.js' ]
}
