const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
      testEnvironment: 'jsdom',
      testPathIgnorePatterns: ['node_modules', 'dist', 'coverage'],
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
      modulePaths: ['node_modules', '<rootDir>/src'],
}
