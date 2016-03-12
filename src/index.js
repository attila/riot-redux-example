var riot = require('riot');
require('./tags/sample-output.tag');

document.addEventListener('DOMContentLoaded', function () {
  "use strict";
  riot.mount('sample-output');
});
