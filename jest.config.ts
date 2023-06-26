/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
    preset: 'jest-preset-angular',
    globalSetup: 'jest-preset-angular/global-setup',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    moduleNameMapper: {
        // mocking every icon so icon service will run in tests
        // TODO: there must be a more elgeant way to fix the icon service problem
        // '@carbon/icons(.*)$': '<rootDir>/test/mocks/icon-mock.js',
        // '@carbon/icons/es/language/20(.*)$': '<rootDir>/test/mocks/mock-icon-language-20.js',
        '@carbon/icons(.*)/16$': '<rootDir>/test/mocks/mock-icon-add-16.js',
        '@carbon/icons(.*)/20$': '<rootDir>/test/mocks/mock-icon-add-20.js',
    },
    collectCoverage: true,
    coverageReporters: ['clover', 'json', 'html', 'lcov', 'text', 'text-summary'],
    coverageDirectory: '<rootDir>/coverage/',
    reporters: ['default', 'jest-junit',],
}