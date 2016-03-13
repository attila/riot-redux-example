<todo-app>

  <loading-indicator loading="{this.state.isLoading}"></loading-indicator>

  <task-list tasks="{this.state.tasks}"></task-list>

  <script>
    import actions from '../actions.js';

    let store = this.opts.store;

    this.on('mount', function() {
      store.dispatch(actions.loadTasks());
    });

    store.subscribe(function () {
      this.state = store.getState();
      this.update();
    }.bind(this));
  </script>
</todo-app>