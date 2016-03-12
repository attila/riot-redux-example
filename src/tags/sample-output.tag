<sample-output>
  <h1>{this.opts.store.getState().title}</h1>

  <form onsubmit="{changeTitle}">
    <input type="text" name="newTitle">
    <button>Change title</button>
  </form>

  <script>
    changeTitle() {
      this.opts.store.dispatch({
        type: 'CHANGE_TITLE',
        data: this.newTitle.value
      });
    }
  </script>
</sample-output>