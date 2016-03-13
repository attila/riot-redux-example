<task-form>
  <form onsubmit="{handleSubmit}">
    <input type="text" name="newTask">
    <button type="submit">Submit</button>
  </form>

  <script>
    this.handleSubmit = () => {
      this.opts.addtask(this.newTask.value);
      this.newTask.value = '';
    }
  </script>
</task-form>