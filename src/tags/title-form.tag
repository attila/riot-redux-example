<title-form>
  <form onsubmit="{changeTitle}">
    <input type="text" name="newTitle">
    <button>Change title</button>
  </form>

  <script>
    import actions from '../actions.js';

    this.changeTitle = () => {
      this.opts.store.dispatch(actions.changeTitle(this.newTitle.value));
    }
  </script>
</title-form>