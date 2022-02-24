const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'POC_test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: 'maximize'
    }
  },
  include: {
    I: './steps_file.js',
    aramaPagePage: './pages/aramaPage.js',
    urunEklePage: './pages/urunEkle.js',
    loginPage: './pages/login.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjsProje'
}