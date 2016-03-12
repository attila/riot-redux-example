import riot from 'riot';
import { createStore } from 'redux';
import './tags/sample-output.tag';
import './tags/title-form.tag';

const reducer = function (state = {title: 'Default title'}, action) {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return Object.assign({}, state, {
        title: action.data
      });

    default:
      return state;
  }
};

const reduxStore = createStore(reducer);

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*', {store: reduxStore});
});
