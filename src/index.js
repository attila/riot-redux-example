var riot = require('riot');
var redux = require('redux');
require('./tags/sample-output.tag');

var reducer = function (state = {title: 'Default title'}, action) {
  return state;
}

var reduxStore = redux.createStore(reducer);

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('sample-output', {store: reduxStore});
});
