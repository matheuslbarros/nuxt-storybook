
module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
  setupFilesAfterEnv: ['./setup.js']
}
