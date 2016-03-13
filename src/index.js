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
import './tags/task-form.tag';
import './tags/error-message.tag';

const reducer = function (state = {tasks: []}, action) {
  console.log(action);
  switch (action.type) {
    case 'TASKS_LOADED':
      return Object.assign({}, state, {tasks: action.data});

    case 'TOGGLE_LOADING':
      return Object.assign({}, state, {isLoading: action.data});

    case 'TASK_ADDED':
      return Object.assign({}, state, {tasks: state.tasks.concat(action.data)});

    case 'TASK_COMPLETION_CHANGED':
      let taskIndex = state.tasks.findIndex((task) => {
        return task.id === parseInt(action.data.id);
      });
      let newTasks = [
        ...state.tasks.slice(0, taskIndex),
        Object.assign({}, state.tasks[taskIndex], {isComplete:action.data.isComplete}),
        ...state.tasks.slice(taskIndex + 1)
      ];
      return Object.assign({}, state, {tasks: newTasks});

    case 'SHOW_ERROR':
      return Object.assign({}, state, {isError: true, errorMessage: action.data});

    case 'HIDE_ERROR':
      return Object.assign({}, state, {isError: false, errorMessage: ''});

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
