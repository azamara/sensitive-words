module.exports = function () {

  return {
    files: [
      'src/*.js',
      '!src/*.test.js'
    ],

    tests: ['src/*.test.js'],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony'
      }
    },

    testFramework: 'jest'

    //setup: function (wallaby) {
    //  wallaby.testFramework.configure({
    //    // https://facebook.github.io/jest/docs/api.html#config-options
    //  });
    //}
  };
};
