const ERROR_MESSAGE = 'Something went wrong, please try again.';

const actions = {
  loadTasks: () => {
    return (dispatch, getState) => {
      dispatch(toggleLoading(true));

      let request = new XMLHttpRequest();

      request.open('GET', 'http://localhost:3000/tasks', true);
      request.onload = () => {
        if (request.status === 200) {
          let data = JSON.parse(request.responseText);
          dispatch(tasksLoaded(data));
        }
        else {
          dispatch(actions.tempErrorMessage(ERROR_MESSAGE));
        }
        dispatch(toggleLoading(false));
      };

      setTimeout(() => {
        request.send();
      }, 1000);
    }
  },

  addTask: (newTask) => {
    return (dispatch, getState) => {
      dispatch(toggleLoading(true));

      let request = new XMLHttpRequest();

      request.open('POST', 'http://localhost:3000/tasks', true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.onload = () => {
        if (request.status === 201) {
          let data = JSON.parse(request.responseText);
          dispatch(taskAdded(data.id, data.name));
        }
        else {
          dispatch(actions.tempErrorMessage(ERROR_MESSAGE));
        }
        dispatch(toggleLoading(false));
      };

      request.send(JSON.stringify({name: newTask}));
    }
  },

  toggleComplete: (id, isComplete) => {
    return (dispatch, getState) => {
      let request = new XMLHttpRequest();

      request.open('PATCH', `http://localhost:3000/tasks/${id}`, true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.onload = () => {
        if (request.status === 200) {
          dispatch(completeChanged(id, isComplete));
        }
        else {
          dispatch(completeChanged(id, !isComplete));
          dispatch(actions.tempErrorMessage(ERROR_MESSAGE));
        }
      };

      request.send(JSON.stringify({isComplete: isComplete}));
    }
  },

  hideError: () => {
    return {type: 'HIDE_ERROR'}
  },

  tempErrorMessage: (message) => {
    return (dispatch, getState) => {
      dispatch(showError(message));
      setTimeout(() => {
        dispatch(actions.hideError());
      }, 5000);
    }
  }
};

function tasksLoaded (tasks) {
  return {
    type: 'TASKS_LOADED',
    data: tasks
  };
}

function toggleLoading (isLoading) {
  return {
    type: 'TOGGLE_LOADING',
    data: isLoading
  };
}

function taskAdded (id, name) {
  return {
    type: 'TASK_ADDED',
    data: {
      id: id,
      name: name
    }
  };
}

function completeChanged (id, isComplete) {
  return {
    type: 'TASK_COMPLETION_CHANGED',
    data: {
      id: id,
      isComplete: isComplete
    }
  };
}

function showError (message) {
  return {
    type: 'SHOW_ERROR',
    data: message
  };
}

export default actions;
