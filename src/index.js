import riot from 'riot';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import thunk from 'redux-thunk';

import './tags/todo-app.tag';
import './tags/task-list.tag';
import './tags/loading-indicator.tag';

const reducer = function (state = {tasks: []}, action) {
  switch (action.type) {
    case 'TASKS_LOADED':
      return Object.assign({}, state, {tasks: action.data});

    case 'TOGGLE_LOADING':
      return Object.assign({}, state, {isLoading: action.data});

    default:
      return state;
  }
};

//const reduxStore = createStore(reducer);
const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

let reduxStore = createStoreWithMiddleware(reducer);

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('todo-app', {store: reduxStore});
});
