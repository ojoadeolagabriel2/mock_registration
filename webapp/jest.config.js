module.exports = {
    verbose: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.style.{js,jsx}'],

    testURL: 'http://localhost',
    testEnvironment: 'jsdom',
    globals: {
        window: true
    },
    setupFilesAfterEnv: ['<rootDir>/setupEnzyme.js']
};
