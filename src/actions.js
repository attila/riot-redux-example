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
      }, 2000);
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

export default actions;
