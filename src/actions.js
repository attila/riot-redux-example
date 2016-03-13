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
        dispatch(toggleLoading(false));
      };

      request.send(JSON.stringify({name: newTask}));
    }
  }
};

function tasksLoaded (tasks) {
  return {
    type: 'TASKS_LOADED',
    data: tasks
  }
}

function toggleLoading (isLoading) {
  return {
    type: 'TOGGLE_LOADING',
    data: isLoading
  }
}

function taskAdded (id, name) {
  return {
    type: 'TASK_ADDED',
    data: {
      id: id,
      name: name
    }
  }
}

export default actions;
