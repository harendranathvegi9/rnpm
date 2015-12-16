const fs = require('fs');
const path = require('path');
const android = require('./android');
const ios = require('./ios');

const flat = {
  android: android.valid,
  ios: ios.valid,
};

const nested = {
  android: {
    app: android.valid,
  },
  ios: ios.valid,
};

module.exports = { flat, nested };
